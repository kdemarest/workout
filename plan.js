// Helpers each person's exercises.js uses to describe timed steps. Loaded before it.
//
// An exercises.js defines APP_TITLE, CAUTION_LABEL (heading of the highlighted caution note),
// PLAN_START (date of week 1, "YYYY-MM-DD"), WORKOUT_PHASES ([{ upTo: week, name }]) and
// WORKOUT_SECTIONS: [{ name, note, exercises }], where each exercise is
// { name, sets, desc, progress?, caution?, figure?: { svg, caption }, steps: (week) => [{ label, secs, rest? }] }
// or a pair() of two such exercises (each with a `short` name for its tab and step chips).
/* exported steps, pair */
"use strict";

// sets × secs, optionally per side ("Right"/"Left" alternate within each set) or with named parts,
// and optionally a timed rest of opts.rest seconds between sets.
function steps(sets, secs, opts = {}) {
    const out = [];
    for (let s = 1; s <= sets; s++) {
        if (opts.rest && s > 1) out.push({ label: "Rest", secs: opts.rest, rest: true });
        const set = sets > 1 ? `Set ${s} of ${sets}` : "";
        const parts = opts.parts || (opts.sides ? ["Right", "Left"] : [""]);
        for (const part of parts) {
            out.push({ label: [set, part].filter(Boolean).join(" · ") || "Go", secs, set: s, sub: part });
        }
    }
    return out;
}

// A main-workout pair: one set of a, one set of b, a rest, repeated. Each step records which
// exercise it belongs to (part 0 or 1), so the page can show that exercise while it runs.
function pair(name, a, b, rest = 60) {
    return {
        name,
        parts: [a, b],
        steps: (week) => {
            const lists = [a.steps(week), b.steps(week)];
            const sets = Math.max(...lists.flat().filter((st) => st.set).map((st) => st.set));
            const out = [];
            for (let s = 1; s <= sets; s++) {
                if (s > 1) out.push({ label: "Rest", chip: "Rest", secs: rest, rest: true });
                lists.forEach((list, part) => {
                    const ex = part === 0 ? a : b;
                    for (const st of list.filter((x) => x.set === s)) {
                        out.push({
                            ...st,
                            part,
                            label: `${ex.short} · ${st.label}`,
                            chip: [ex.short, s, st.sub && st.sub[0]].filter(Boolean).join(" ")
                        });
                    }
                });
            }
            return out;
        }
    };
}
