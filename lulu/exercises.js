// Lulu's exercises, from the Google Doc "Rehab Lulu" (the master copy for what to do and how much;
// update this file when the doc changes). The doc lists the exercises without instructions, so the
// "desc" text here (how to do each one) is written for the app, within the doc's rules.
// Format and the steps() helper: ../plan.js. Rep-based sets are timed from their tempo, rounded to 5 seconds.
/* exported APP_TITLE, CAUTION_LABEL, PLAN_START, WORKOUT_SECTIONS, WORKOUT_PHASES */
"use strict";

const APP_TITLE = "Lulu Rehab";
const CAUTION_LABEL = "Right hip"; // heading for each exercise's caution note
const PLAN_START = "2026-10-10"; // Phase 1 started 10 October 2026

const PAIN_RULE = "Pain up to 3/10 is fine if it has settled by the next morning; worse the next morning, drop back a step.";
const HIP_RULE = "Avoid deep hip flexion past 90°, knee-to-chest, deep squats and forcing internal rotation.";

const WORKOUT_SECTIONS = [
    {
        name: "Stretches",
        note: `Daily, gentle, never into a groin pinch. ${HIP_RULE}`,
        exercises: [
            {
                name: "Half-kneeling hip flexor stretch",
                sets: "2 × 30–45 seconds per side",
                desc: "Kneel on one knee on a cushion, the other foot flat in front. Tuck the tailbone under and squeeze the buttock on the kneeling side, then shift the body forward a little until the front of that hip stretches. Keep the back from arching.",
                steps: () => steps(2, 45, { sides: true })
            },
            {
                name: "Pigeon or 90/90",
                sets: "2 × 30 seconds per side",
                desc: "90/90: sit with the front leg bent 90° in front of you and the back leg bent 90° out to the side, sit tall and lean gently forward over the front shin. Pigeon: from hands and knees, bring one knee forward behind the same-side wrist, slide the other leg straight back, and lower the hips toward the floor, propped on a pillow if needed. Feeling it in the buttock is right.",
                caution: "Stop if it pinches in the groin. The right leg as the back leg in 90/90 pinches; pigeon does not, so use pigeon for the right side.",
                steps: () => steps(2, 30, { sides: true })
            },
            {
                name: "Butterfly or frog",
                sets: "2 × 30 seconds",
                desc: "Butterfly: sit with the soles of the feet together and let the knees fall open, back tall. Frog: on hands and knees, slide the knees apart and sit gently back. Easy range only.",
                caution: "Skip it if dysplasia is confirmed, since a loose joint doesn't need more slack.",
                steps: () => steps(2, 30)
            },
            {
                name: "Cat-cow",
                sets: "10 slow cycles",
                desc: "On hands and knees, hands under the shoulders, hips over the knees. Round the back up toward the ceiling for 2–3 seconds, then let the belly drop and lift the chest for 2–3 seconds.",
                steps: () => steps(1, 50)
            },
            {
                name: "Pelvic tilts",
                sets: "10 reps, 3–5 second hold",
                desc: "On your back, knees bent, feet flat. Tilt the pelvis to flatten the low back gently into the floor, hold 3–5 seconds, release.",
                steps: () => steps(1, 60)
            }
        ]
    },
    {
        name: "Pelvic floor relaxation",
        note: "Daily, gentle, never into pain. The goal is to relax the pelvic floor, not strengthen it: breathe into the pelvis throughout. Pelvic = pelvic floor only; Both = pelvic floor and hip. Skip for now: happy baby and deep squat (they break the 90° hip rule). Avoid: Kegels, clenching, holding urine for long periods, crunches, hovering over toilets. Extras: warm baths and a heating pad.",
        exercises: [
            {
                name: "Diaphragmatic breathing with pelvic floor drop (Pelvic)",
                sets: "5–10 minutes",
                desc: "On your back, knees bent. Breathe into the belly and lower ribs. On each inhale, let the pelvic floor soften and drop slightly, as if starting to pee. Everything else builds on this.",
                steps: () => steps(1, 300)
            },
            {
                name: "Reverse Kegel (Pelvic)",
                sets: "10 reps",
                desc: "A gentle bear-down and release, as if passing gas. Breathe in as you let go, then relax completely before the next one.",
                steps: () => steps(1, 50)
            },
            {
                name: "Cat-cow (Both)",
                sets: "10 slow cycles",
                desc: "As in Stretches: hands under the shoulders, hips over the knees, round the back up for 2–3 seconds, then let the belly drop for 2–3 seconds. Breathe into the pelvis on each cycle.",
                steps: () => steps(1, 50)
            },
            {
                name: "Figure-4 (Both)",
                sets: "30–60 seconds per side",
                desc: "On your back, knees bent. Cross one ankle over the opposite knee and let the crossed knee fall open; for more, lift the bottom foot and draw that thigh gently toward you, staying below 90° at the hip. Breathe into the pelvis.",
                caution: "Stop if it pinches in the groin.",
                steps: () => steps(1, 45, { sides: true })
            },
            {
                name: "Butterfly lying down (Both)",
                sets: "30–60 seconds",
                desc: "On your back, soles of the feet together, knees falling open onto pillows. Keep it shallow and breathe into the pelvis.",
                caution: "Skip it if it brings on the groin pinch.",
                steps: () => steps(1, 45)
            },
            {
                name: "Child's pose, wide knees (Both)",
                sets: "30–60 seconds",
                desc: "Kneel with the knees wide, forehead down, and let the hips sink back toward the heels, with a pillow between the hips and heels so the hips stay high. Breathe into the pelvis.",
                caution: "This is deep hip flexion: keep the hips high on the pillow and stop at any groin pinch.",
                steps: () => steps(1, 45)
            }
        ]
    },
    {
        name: "Phase 1: Activate",
        note: `Weeks 1–3, 3 times a week on alternate days, about 25 minutes. Move to Phase 2 only when this phase feels easy for a full week. ${PAIN_RULE}`,
        exercises: [
            {
                name: "Isometric hip abduction",
                sets: "5 × 30-second holds",
                desc: "On your back, knees bent, feet flat, a belt or band looped just above the knees. Push the knees outward into the belt at about half effort and hold, breathing normally.",
                steps: () => steps(5, 30, { rest: 30 })
            },
            {
                name: "Isometric pillow squeeze",
                sets: "5 × 30-second holds",
                desc: "On your back, knees bent, feet flat, a pillow between the knees. Squeeze it at about half effort and hold, breathing normally.",
                caution: "Ease off if the squeeze brings on the groin pain.",
                steps: () => steps(5, 30, { rest: 30 })
            },
            {
                name: "Glute bridge",
                sets: "3 × 10–15, 2–3 second hold at the top, lower over 2–3 seconds",
                desc: "On your back, knees bent, feet flat and hip-width apart. Squeeze the buttocks and lift the hips until knees, hips and shoulders are in a line, without arching the low back. Hold, then lower slowly.",
                steps: () => steps(3, 90, { rest: 60 })
            },
            {
                name: "Side-lying leg raise",
                sets: "3 × 10–15 per side, 2 second hold at the top",
                desc: "Lie on your side, bottom knee bent for balance, top leg straight and in line with the body, toes pointing forward, not up. Lift the top leg about 30 cm, leading with the heel, hold, and lower slowly. Keep the hips stacked: don't roll back.",
                steps: () => steps(3, 60, { sides: true })
            },
            {
                name: "Clamshell",
                sets: "3 × 10–15 per side, 2 second hold at the top",
                desc: "Lie on your side, hips and knees bent about 45°, heels together. Keeping the feet together and the hips stacked, lift the top knee, hold, and lower slowly.",
                steps: () => steps(3, 60, { sides: true })
            },
            {
                name: "Dead bug",
                sets: "3 × 10–15, 2 second hold at full reach",
                desc: "On your back, arms pointing at the ceiling, hips and knees bent 90° (no more). Press the low back gently into the floor. Slowly reach one arm overhead and straighten the opposite leg toward the floor, hold, return, and switch sides. Each reach is one rep.",
                steps: () => steps(3, 75, { rest: 60 })
            }
        ]
    },
    {
        name: "Phase 2: Build",
        note: `Weeks 4–7, 3 times a week on alternate days, about 25 minutes. Move to Phase 3 only when this phase feels easy for a full week. ${PAIN_RULE}`,
        exercises: [
            {
                name: "Single-leg bridge",
                sets: "3 × 10–12 per side, 2–3 second hold at the top",
                desc: "As the glute bridge, with one foot on the floor and the other leg held straight out in line with its thigh. Lift through the heel on the floor, hips level, hold, and lower slowly.",
                steps: () => steps(3, 75, { sides: true })
            },
            {
                name: "Banded clamshell",
                sets: "3 × 10–12 per side, 2 second hold at the top",
                desc: "As the clamshell, with a band looped just above the knees: hips and knees bent about 45°, heels together, hips stacked. Lift the top knee against the band, hold, and lower slowly.",
                steps: () => steps(3, 55, { sides: true })
            },
            {
                name: "Side plank, knees then feet",
                sets: "3 × 20–30 seconds per side",
                desc: "On your side, elbow under the shoulder, knees bent. Lift the hips so the body is straight from head to knees and hold. When 3 × 30 seconds is easy, straighten the legs and lift from the feet.",
                steps: () => steps(3, 30, { sides: true })
            },
            {
                name: "Standing banded abduction",
                sets: "3 × 10–12 per side, 2 second hold out",
                desc: "A band around the ankles, one hand on a counter. Standing tall on one leg, move the other leg out to the side about 30 cm, toes forward, hold, and return slowly. Keep the trunk upright: don't lean away.",
                steps: () => steps(3, 55, { sides: true })
            },
            {
                name: "Sit-to-stand",
                sets: "3 × 10–12, lower over 3 seconds",
                desc: "Use a chair high enough that the hips stay above the knees when seated (add a cushion). Feet hip-width apart, stand up without using the hands, then sit back down slowly.",
                steps: () => steps(3, 55, { rest: 60 })
            },
            {
                name: "Single-leg balance",
                sets: "3 × 30–45 seconds per side",
                desc: "Stand on one leg next to a counter, standing knee soft, hips level. Touch the counter only if needed. Harder: close the eyes, or stand on a cushion.",
                steps: () => steps(3, 45, { sides: true })
            }
        ]
    },
    {
        name: "Phase 3: Load",
        note: `Weeks 8–12, 3 times a week on alternate days, about 25 minutes. ${PAIN_RULE} Frog kick, breaststroke, tennis pivots and running wait until Phase 3 without flares.`,
        exercises: [
            {
                name: "Step-ups, low step",
                sets: "3 × 8–12 per side, 1–2 second pause at the top",
                desc: "A low step, 10–15 cm. Step up with the working leg, press through the heel to stand tall, pause, and step back down with the other leg. Keep the knee over the middle toes.",
                steps: () => steps(3, 50, { sides: true })
            },
            {
                name: "Slow step-downs, low step",
                sets: "3 × 8–12 per side, lower over 3 seconds",
                desc: "Stand on the low step on the working leg. Slowly lower the other heel to touch the floor, then press back up. The knee tracks over the middle toes and the hips stay level.",
                steps: () => steps(3, 50, { sides: true })
            },
            {
                name: "Split squat, shallow range",
                sets: "3 × 8–12 per side, 1–2 second pause at the bottom",
                desc: "Feet a long stride apart, back heel up, a hand on a counter if needed. Lower straight down only partway, front thigh well above parallel, pause, and push back up.",
                caution: "Stop at any groin pinch; go less deep rather than push through it.",
                steps: () => steps(3, 60, { sides: true })
            },
            {
                name: "Side plank with leg lift",
                sets: "3 × 8–12 per side, 2 second hold at the top",
                desc: "In a side plank on the elbow (from the knees or the feet), lift the top leg about 20–30 cm, hold, and lower.",
                steps: () => steps(3, 50, { sides: true })
            },
            {
                name: "Copenhagen plank, short lever",
                sets: "3 × 15–20 seconds per side",
                desc: "Side plank on the elbow with the top knee resting on a chair seat or bench and the bottom leg tucked or hanging free. Lift the hips so the body is straight, and hold. Short lever means the knee is on the chair, not the foot.",
                caution: "This loads the inner thigh: stop if it brings on the groin pain.",
                steps: () => steps(3, 20, { sides: true })
            },
            {
                name: "Single-leg Romanian deadlift",
                sets: "3 × 8–12 per side, 1–2 second pause at the bottom",
                desc: "Stand on one leg, knee soft, a hand lightly on a counter if needed. Hinge forward at the hip with the back flat while the other leg reaches straight back, pause, then stand up by squeezing the buttock.",
                caution: "Hinge only as far as the hip allows without a pinch, well short of 90°.",
                steps: () => steps(3, 60, { sides: true })
            }
        ]
    },
    {
        name: "Maintenance",
        note: "After week 12: 2 times a week, about 15 minutes, one band and bodyweight only. Hip flexor stretch and 90/90 most days. Before tennis or running: bridges and leg swings as a warm-up. In a flare: back to Phase 1–2 for 2 weeks, then resume.",
        exercises: [
            {
                name: "Single-leg bridge",
                sets: "2 × 12 per side, 2–3 second hold at the top",
                desc: "On your back, one foot on the floor and the other leg held straight out in line with its thigh. Lift through the heel on the floor, hips level, hold, and lower slowly.",
                steps: () => steps(2, 80, { sides: true })
            },
            {
                name: "Side plank with leg lift",
                sets: "2 × 8–10 per side, 2 second hold at the top",
                desc: "In a side plank on the elbow, lift the top leg about 20–30 cm, hold, and lower.",
                steps: () => steps(2, 45, { sides: true })
            },
            {
                name: "Split squat or step-down",
                sets: "2 × 10 per side, lower over 3 seconds",
                desc: "Split squat: feet a long stride apart, lower partway, front thigh well above parallel, and push back up. Step-down: on a low step, lower the other heel to the floor and press back up.",
                caution: "Stop at any groin pinch.",
                steps: () => steps(2, 55, { sides: true })
            },
            {
                name: "Copenhagen plank",
                sets: "2 × 20 seconds per side",
                desc: "Side plank on the elbow with the top knee (or, when that is easy, the foot) on a chair seat, bottom leg free. Lift the hips so the body is straight, and hold.",
                steps: () => steps(2, 20, { sides: true })
            },
            {
                name: "Single-leg Romanian deadlift",
                sets: "2 × 10 per side, 1–2 second pause at the bottom",
                desc: "Stand on one leg, knee soft. Hinge forward with the back flat while the other leg reaches straight back, pause, and stand up by squeezing the buttock.",
                caution: "Only as far as the hip allows without a pinch.",
                steps: () => steps(2, 60, { sides: true })
            },
            {
                name: "Hip flexor stretch",
                sets: "2 × 30 seconds per side, most days",
                desc: "Half-kneeling, tailbone tucked, buttock of the kneeling side squeezed; shift forward until the front of that hip stretches.",
                steps: () => steps(2, 30, { sides: true })
            },
            {
                name: "90/90",
                sets: "2 × 30 seconds per side, most days",
                desc: "Front leg bent 90° in front, back leg bent 90° to the side; sit tall and lean gently over the front shin.",
                caution: "If the right leg as the back leg pinches, use pigeon for that side.",
                steps: () => steps(2, 30, { sides: true })
            }
        ]
    }
];

// Phases go by readiness, not only the calendar: the header shows the week and the phase the calendar suggests.
const WORKOUT_PHASES = [
    { upTo: 3, name: "Weeks 1–3: Phase 1, activate" },
    { upTo: 7, name: "Weeks 4–7: Phase 2, build" },
    { upTo: 12, name: "Weeks 8–12: Phase 3, load" },
    { upTo: Infinity, name: "After week 12: maintenance" }
];
