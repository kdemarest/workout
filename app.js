// Workout timer page, shared by every person's page (ken/, lulu/): pick an exercise, read it, tap Go;
// one beep when the step's time is up. The page loads ../plan.js and its own exercises.js first.
"use strict";

const $ = (id) => document.getElementById(id);
// Per person: everyone's pages share one site, so the keys carry the plan's title.
const storePrefix = `workout.${APP_TITLE}.`;
const store = {
    get(key, fallback) {
        try { const v = localStorage.getItem(storePrefix + key); return v === null ? fallback : JSON.parse(v); } catch { return fallback; }
    },
    set(key, value) {
        try { localStorage.setItem(storePrefix + key, JSON.stringify(value)); } catch { /* storage unavailable */ }
    }
};

function currentWeek(now = new Date()) {
    const start = new Date(PLAN_START + "T00:00:00");
    return Math.max(1, Math.floor((now - start) / (7 * 24 * 3600 * 1000)) + 1);
}

const week = currentWeek();
const all = WORKOUT_SECTIONS.flatMap((section) => section.exercises.map((ex) => ({ ...ex, section, id: `${section.name}/${ex.name}` })));

let current = null;   // exercise, or a main-workout pair with .parts
let partIndex = 0;    // which exercise of a pair the card shows
let stepList = [];    // its steps for this week
let stepIndex = 0;
const stepsDone = {}; // step reached per exercise, so you can switch between the two exercises of a pair
let extra = {};       // per-exercise seconds adjustment, remembered
let timer = null;     // { endAt, raf }
let audio = null;
let wakeLock = null;

function fmt(secs) {
    const s = Math.max(0, Math.ceil(secs));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

// −5 / +5 changes the exercise's working steps, not its rests.
function stepSecs(i) {
    return Math.max(5, stepList[i].secs + (stepList[i].rest ? 0 : extra[current.id] || 0));
}

function buildPicker() {
    const sel = $("picker");
    for (const section of WORKOUT_SECTIONS) {
        const group = document.createElement("optgroup");
        group.label = section.name;
        for (const ex of all.filter((e) => e.section === section)) {
            const opt = document.createElement("option");
            opt.value = ex.id;
            opt.textContent = ex.name;
            group.appendChild(opt);
        }
        sel.appendChild(group);
    }
    sel.addEventListener("change", () => select(sel.value));
}

function select(id) {
    stopTimer(false);
    current = all.find((e) => e.id === id) || all[0];
    stepList = current.steps(week);
    $("picker").value = current.id;
    store.set("last", current.id);
    $("section-note").textContent = current.section.note;
    setStep(stepsDone[current.id] || 0);
}

// A pair's step belongs to one of its exercises; a rest shows the exercise that comes next.
function partFor(i) {
    const st = stepList[i] && stepList[i].part !== undefined ? stepList[i] : stepList[i + 1];
    return st && st.part !== undefined ? st.part : 0;
}

function setStep(i) {
    stepIndex = i;
    showPart(partFor(i));
    renderSteps();
}

function showPart(i) {
    const parts = current.parts || [current];
    partIndex = Math.max(0, Math.min(parts.length - 1, i));
    const ex = parts[partIndex];
    const tabs = $("tabs");
    tabs.textContent = "";
    tabs.hidden = !current.parts;
    parts.forEach((p, k) => {
        if (!current.parts) return;
        const t = document.createElement("button");
        t.type = "button";
        t.setAttribute("role", "tab");
        t.className = "tab";
        t.textContent = p.short || p.name;
        t.setAttribute("aria-selected", String(k === partIndex));
        t.addEventListener("click", () => showPart(k));
        tabs.appendChild(t);
    });
    $("name").textContent = ex.name;
    $("sets").textContent = ex.sets;
    $("desc").textContent = ex.desc;
    $("progress").hidden = !ex.progress;
    $("progress-text").textContent = ex.progress || "";
    $("caution").hidden = !ex.caution;
    $("caution-text").textContent = ex.caution || "";
    // Figures are inline SVG from exercises.js (our own file), so they can use the page's colours.
    $("figure").hidden = !ex.figure;
    $("figure-svg").innerHTML = ex.figure ? ex.figure.svg : "";
    $("figure-caption").textContent = ex.figure ? ex.figure.caption : "";
}

// Swipe left or right on the card to switch between the two exercises of a pair.
function watchSwipe() {
    let start = null;
    const card = $("card");
    card.addEventListener("touchstart", (e) => { start = e.touches.length === 1 ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null; }, { passive: true });
    card.addEventListener("touchend", (e) => {
        if (!start || !current.parts) return;
        const dx = e.changedTouches[0].clientX - start.x;
        const dy = e.changedTouches[0].clientY - start.y;
        start = null;
        if (Math.abs(dx) > 50 && Math.abs(dx) > 1.5 * Math.abs(dy)) showPart(partIndex + (dx < 0 ? 1 : -1));
    }, { passive: true });
}

function renderSteps() {
    stepsDone[current.id] = stepIndex;
    const list = $("steps");
    list.textContent = "";
    stepList.forEach((st, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "step" + (i < stepIndex ? " done" : "") + (i === stepIndex ? " active" : "") + (st.part === 1 ? " second" : "") + (st.rest ? " rest" : "");
        b.textContent = `${st.chip || st.label} · ${fmt(stepSecs(i))}`;
        b.addEventListener("click", () => { stopTimer(false); setStep(i); });
        list.appendChild(b);
    });
    const finished = stepIndex >= stepList.length;
    $("step-label").textContent = finished ? "All done" : stepList[stepIndex].label;
    $("clock").textContent = finished ? "✓" : fmt(stepSecs(stepIndex));
    $("go").textContent = timer ? "Stop" : (finished ? "Again" : "Go");
    $("go").classList.toggle("running", !!timer);
    const adj = extra[current.id] || 0;
    $("adjust").textContent = adj ? `${adj > 0 ? "+" : ""}${adj}s` : "";
}

function beep() {
    if (!audio) return;
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    const t = audio.currentTime;
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.6, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
    osc.connect(gain).connect(audio.destination);
    osc.start(t);
    osc.stop(t + 0.55);
}

async function keepAwake(on) {
    try {
        if (on && "wakeLock" in navigator && !wakeLock) wakeLock = await navigator.wakeLock.request("screen");
        if (!on && wakeLock) { await wakeLock.release(); wakeLock = null; }
    } catch { wakeLock = null; }
}

function tick() {
    const left = (timer.endAt - performance.now()) / 1000;
    if (left <= 0) {
        timer = null;
        beep();
        keepAwake(false);
        setStep(stepIndex + 1);
        return;
    }
    $("clock").textContent = fmt(left);
    timer.raf = requestAnimationFrame(tick);
}

function go() {
    if (timer) { stopTimer(true); return; }
    if (!audio) {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (Ctx) audio = new Ctx();
    }
    if (audio && audio.state === "suspended") audio.resume();
    // iPhone: play the beep as media, so the ring/silent switch doesn't mute it (Safari 16.4+).
    try { if (navigator.audioSession) navigator.audioSession.type = "playback"; } catch { /* not supported */ }
    if (stepIndex >= stepList.length) setStep(0);
    timer = { endAt: performance.now() + stepSecs(stepIndex) * 1000 };
    keepAwake(true);
    renderSteps();
    timer.raf = requestAnimationFrame(tick);
}

function stopTimer(render) {
    if (timer) cancelAnimationFrame(timer.raf);
    timer = null;
    keepAwake(false);
    if (render) renderSteps();
}

function adjust(delta) {
    if (timer) return;
    extra[current.id] = (extra[current.id] || 0) + delta;
    store.set("extra", extra);
    renderSteps();
}

function move(delta) {
    const i = all.indexOf(current);
    select(all[(i + delta + all.length) % all.length].id);
}

function init() {
    $("title").textContent = APP_TITLE;
    $("caution-label").textContent = CAUTION_LABEL + ":";
    const phase = WORKOUT_PHASES.find((p) => week <= p.upTo);
    $("week").textContent = `Week ${week} · ${phase.name.replace(/^[^:]*: /, "")}`;
    extra = store.get("extra", {});
    buildPicker();
    $("go").addEventListener("click", go);
    $("minus").addEventListener("click", () => adjust(-5));
    $("plus").addEventListener("click", () => adjust(5));
    $("prev").addEventListener("click", () => move(-1));
    $("next").addEventListener("click", () => move(1));
    watchSwipe();
    // Timers stall while the page is hidden; catch up when it comes back.
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible" && timer) { cancelAnimationFrame(timer.raf); tick(); }
    });
    select(store.get("last", all[0].id));
}

init();

// Works offline once loaded, and installs from Safari's Add to Home Screen; see ../sw.js.
if ("serviceWorker" in navigator) navigator.serviceWorker.register("../sw.js").catch(() => { /* offline support is optional */ });
