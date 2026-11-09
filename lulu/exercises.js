// Lulu's exercises, from the Google Doc "Rehab Lulu" (the master copy for what to do and how much;
// update this file when the doc changes). The doc lists the exercises without instructions, so the
// "desc" text here (how to do each one) is written for the app, within the doc's rules.
// Format and the steps() helper: ../plan.js. Rep-based sets are timed from their tempo, rounded to 5 seconds.
/* exported APP_TITLE, CAUTION_LABEL, PLAN_START, WORKOUT_SECTIONS, WORKOUT_PHASES */
"use strict";

const APP_TITLE = "Lulu Rehab";
const CAUTION_LABEL = "Right hip"; // heading for each exercise's caution note
const PLAN_START = "2026-11-07"; // "Protected hip" started 7 November 2026 (the paused plan started 10 October)

const PAIN_RULE = "Pain up to 3/10 is fine if it has settled by the next morning; worse the next morning, drop back a step.";
const HIP_RULE = "Avoid deep hip flexion past 90°, knee-to-chest, deep squats and forcing internal rotation.";
const PROTECT_RULE = "Protected hip: no force through the right hip, from body weight or its own muscles. Stop if the groin pain gets worse, and tell the doctor.";
const PAUSED = "Paused on 6 November while the hip is protected: don't restart until her doctor clears loading.";

const WORKOUT_SECTIONS = [
    {
        name: "Upper body",
        note: `3 times a week on alternate days, seated or lying. With the core and left-leg work, about 40 minutes including rests. ${PROTECT_RULE}`,
        exercises: [
            {
                name: "Chair push-ups",
                sets: "3 × 8–12, lower over 2 seconds",
                desc: "Sit in a sturdy chair with armrests, hands on the armrests beside the hips. Push down through the hands to straighten the arms and lift the bottom off the seat, then lower slowly. This is the crutch movement.",
                caution: "Lift with the arms. The feet rest lightly on the floor: don't push up through the right leg.",
                steps: () => steps(3, 40, { rest: 60 })
            },
            {
                name: "Seated chest press",
                sets: "3 × 10–12",
                desc: "Seated, back supported. With a band around the chair back or dumbbells at chest height, press both hands straight forward until the arms are straight, then return slowly.",
                steps: () => steps(3, 35, { rest: 60 })
            },
            {
                name: "Seated band row",
                sets: "3 × 10–12, 1 second squeeze",
                desc: "Seated tall, a band anchored in front at chest height. Pull the hands to the lower ribs, elbows close to the body, squeeze the shoulder blades together for a second, then return slowly.",
                steps: () => steps(3, 45, { rest: 60 })
            },
            {
                name: "Seated band pulldown",
                sets: "3 × 10–12",
                desc: "Seated, a band anchored high (over a door). Start with the arms up, then pull the elbows down to the sides until the hands reach shoulder height, and return slowly.",
                steps: () => steps(3, 35, { rest: 60 })
            },
            {
                name: "Seated biceps curl",
                sets: "3 × 10–12",
                desc: "Seated, dumbbells or a band under the left foot. Elbows at the sides, curl the hands to the shoulders, and lower slowly.",
                caution: "Anchor a band under the left foot, not the right.",
                steps: () => steps(3, 35, { rest: 60 })
            },
            {
                name: "Seated overhead triceps extension",
                sets: "3 × 10–12",
                desc: "Seated tall, one dumbbell held in both hands behind the head, elbows pointing up. Straighten the arms overhead, then lower slowly behind the head.",
                steps: () => steps(3, 35, { rest: 60 })
            },
            {
                name: "Grip squeeze",
                sets: "3 × 30 seconds per hand",
                desc: "Squeeze a soft ball or a rolled towel firmly and hold. It helps the hands cope with crutches.",
                steps: () => steps(3, 30, { parts: ["Right hand", "Left hand"], rest: 30 })
            }
        ]
    },
    {
        name: "Core",
        note: `With the upper body: lying on the back with the legs resting, or seated. ${PROTECT_RULE}`,
        exercises: [
            {
                name: "Curl-up, right leg straight",
                sets: "3 × 8, 5 second hold",
                desc: "On your back, right leg straight and resting, left knee bent with the foot flat, hands under the low back. Lift the head and shoulders just off the floor, keeping the neck long, hold 5 seconds, and lower.",
                caution: "The right leg stays relaxed on the floor.",
                steps: () => steps(3, 55, { rest: 45 })
            },
            {
                name: "Seated Pallof press",
                sets: "3 × 8 per side, 3 second hold",
                desc: "Seated sideways to a band anchored at chest height, both hands holding it at the chest. Press the hands straight out, resist the band pulling you round, hold 3 seconds, and bring them back. Then face the other way.",
                steps: () => steps(3, 40, { sides: true })
            },
            {
                name: "Pelvic tilts",
                sets: "10 reps, 3–5 second hold",
                desc: "On your back, legs resting (knees bent only if comfortable). Tilt the pelvis to flatten the low back gently into the floor, hold 3–5 seconds, release.",
                steps: () => steps(1, 60)
            }
        ]
    },
    {
        name: "Left leg",
        note: `With the upper body. The left hip works harder while the right is protected, and training one leg slows strength loss in the other. ${PROTECT_RULE}`,
        exercises: [
            {
                name: "Seated knee extension, left",
                sets: "3 × 10–12, 2 second hold",
                desc: "Sit tall with a band from the left ankle to the chair leg behind, or an ankle weight. Straighten the left knee, hold 2 seconds, and lower slowly.",
                steps: () => steps(3, 50, { rest: 45 })
            },
            {
                name: "Hamstring curl lying face down, left",
                sets: "3 × 10–12",
                desc: "Lie face down, an ankle weight on the left ankle. Bend the left knee to bring the heel toward the buttock, and lower slowly. Keep the hips down.",
                caution: "The right leg stays relaxed on the floor.",
                steps: () => steps(3, 35, { rest: 45 })
            }
        ]
    },
    {
        name: "Right leg, gentle",
        note: "Daily, light effort, if her doctor agrees. No straight-leg raises or resisted hip movements.",
        exercises: [
            {
                name: "Ankle pumps",
                sets: "2 × 20",
                desc: "Lying or seated, right leg resting. Point the foot away, then pull the toes toward you, steadily.",
                steps: () => steps(2, 30, { rest: 15 })
            },
            {
                name: "Thigh tightening",
                sets: "10 × 5 seconds",
                desc: "On your back, right leg straight. Tighten the front of the thigh to press the back of the knee gently into the floor, hold 5 seconds, relax 5 seconds.",
                caution: "Light effort. The heel stays on the floor.",
                steps: () => steps(1, 100)
            },
            {
                name: "Buttock squeezes",
                sets: "10 × 5 seconds, light",
                desc: "On your back, legs resting. Gently squeeze the buttocks together, hold 5 seconds, relax 5 seconds.",
                caution: "Light effort only; stop if it brings on groin pain.",
                steps: () => steps(1, 100)
            }
        ]
    },
    {
        name: "Breathing and pelvic floor",
        note: "Daily, as before. Cat-cow, figure-4, butterfly lying down and child's pose are paused (see the paused sections).",
        exercises: [
            {
                name: "Diaphragmatic breathing with pelvic floor drop",
                sets: "5–10 minutes",
                desc: "On your back, knees bent or legs resting. Breathe into the belly and lower ribs. On each inhale, let the pelvic floor soften and drop slightly, as if starting to pee.",
                steps: () => steps(1, 300)
            },
            {
                name: "Reverse Kegel",
                sets: "10 reps",
                desc: "A gentle bear-down and release, as if passing gas. Breathe in as you let go, then relax completely before the next one.",
                steps: () => steps(1, 50)
            }
        ]
    },
    {
        name: "Paused: Stretches",
        note: `${PAUSED} Daily, gentle, never into a groin pinch. ${HIP_RULE}`,
        exercises: [
            {
                name: "Half-kneeling hip flexor stretch",
                sets: "2 × 30–45 seconds per side",
                desc: "Kneel on one knee on a cushion, the other foot flat in front. Tuck the tailbone under and squeeze the buttock on the kneeling side, then shift the body forward a little until the front of that hip stretches. Keep the back from arching.",
                steps: () => steps(2, 45, { sides: true })
            },
            {
                name: "90/90",
                sets: "2 × 30 seconds per side",
                desc: "Sit with the front leg bent 90° in front of you and the back leg bent 90° out to the side, sit tall and lean gently forward over the front shin. Feeling it in the buttock is right.",
                caution: "Stop if it pinches in the groin. No pigeon: it pinches.",
                steps: () => steps(2, 30, { sides: true })
            },
            {
                name: "Butterfly",
                sets: "2 × 30 seconds",
                desc: "Sit with the soles of the feet together and let the knees fall open, back tall. Easy range only.",
                caution: "It pinches slightly: stay well short of that, or skip it. No frog: it pinches. Skip butterfly too if dysplasia is confirmed, since a loose joint doesn't need more slack.",
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
        name: "Paused: Pelvic floor extras",
        note: "Paused on 6 November while the hip is protected: don't restart until her doctor clears loading. (Breathing and reverse Kegel continue, in Breathing and pelvic floor.) Daily, gentle, never into pain. The goal is to relax the pelvic floor, not strengthen it: breathe into the pelvis throughout. Pelvic = pelvic floor only; Both = pelvic floor and hip. Skip for now: happy baby and deep squat (they break the 90° hip rule). Avoid: Kegels, clenching, holding urine for long periods, crunches, hovering over toilets. Extras: warm baths and a heating pad.",
        exercises: [
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
        name: "Paused: Phase 1: Activate",
        note: `${PAUSED} Weeks 1–3, 3 times a week on alternate days, about 25 minutes. Move to Phase 2 only when this phase feels easy for a full week. ${PAIN_RULE}`,
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
        name: "Paused: Phase 2: Build",
        note: `${PAUSED} Weeks 4–7, 3 times a week on alternate days, about 25 minutes. Move to Phase 3 only when this phase feels easy for a full week. ${PAIN_RULE}`,
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
        name: "Paused: Phase 3: Load",
        note: `${PAUSED} Weeks 8–12, 3 times a week on alternate days, about 25 minutes. ${PAIN_RULE} Frog kick, breaststroke, tennis pivots and running wait until Phase 3 without flares.`,
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
        name: "Paused: Maintenance",
        note: "Paused on 6 November while the hip is protected: don't restart until her doctor clears loading. After week 12: 2 times a week, about 15 minutes, one band and bodyweight only. Hip flexor stretch and 90/90 most days. Before tennis or running: bridges and leg swings as a warm-up. In a flare: back to Phase 1–2 for 2 weeks, then resume.",
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
                caution: "Stop if it pinches in the groin. No pigeon instead: it pinches.",
                steps: () => steps(2, 30, { sides: true })
            }
        ]
    }
];

// The header shows the week of the protected-hip plan. The paused plan's phases (weeks 1–3, 4–7, 8–12,
// then maintenance) restart from a new PLAN_START once her doctor clears loading.
const WORKOUT_PHASES = [
    { upTo: Infinity, name: "Now: protected hip" }
];
