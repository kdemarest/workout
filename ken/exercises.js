// Ken's exercises, from the Google Doc "Ken Arms" (the master copy; update this file when the doc changes).
// Format and the steps()/pair() helpers: ../plan.js. Rep-based sets are timed from their tempo, rounded to 5 seconds.
/* exported APP_TITLE, CAUTION_LABEL, PLAN_START, WORKOUT_SECTIONS, WORKOUT_PHASES */
"use strict";

const APP_TITLE = "Ken Arms";
const CAUTION_LABEL = "Left shoulder"; // heading for each exercise's caution note
const PLAN_START = "2026-11-02"; // Monday of week 1

const WORKOUT_SECTIONS = [
    {
        name: "Daily mobility",
        note: "Every day, about 12 minutes, best when warm. Stretch to a mild pull, never into pain, and breathe out slowly into each hold. Overhead test every 2 weeks: measure the knuckles-to-floor gap for each hand.",
        exercises: [
            {
                name: "Thoracic extension over a towel",
                sets: "4 spots × 45 seconds",
                desc: "Lie on your back over a tightly rolled towel or a 1 L bottle placed across the upper back at the bottom of the shoulder blades, hands behind the head, elbows pointing up, hips on the floor. Let the upper back drape over it and breathe out. Rest your head in your hands and let them lower it toward the floor, chin slightly tucked; don't let it hang back, and put a folded towel under it if your neck strains. Move the towel 2–3 cm higher for each spot, stopping below the neck. Keep it off the low back; this is for the upper back only.",
                progress: "From week 7, for the last 15 seconds of each spot, reach both straight arms overhead toward the floor.",
                steps: () => [1, 2, 3, 4].map((n) => ({ label: `Spot ${n} of 4`, secs: 45 }))
            },
            {
                name: "Open book",
                sets: "1 × 8 per side, 10-second hold at the end",
                desc: "Lie on your side, hips and knees bent 90°, a pillow under the head, a rolled towel squeezed between the knees, both arms straight out in front at shoulder height. Keep squeezing the towel, with both knees on the floor, and sweep the top arm up and over to the other side, turning the chest toward the ceiling and following the hand with your eyes. Turn from the upper back only: the hips stay stacked and must not roll back. Stop where the top hip starts to roll, even if the shoulder blade is still well off the floor. Breathe out at the end and let the arm sink, then return slowly.",
                caution: "Weeks 1–6: when turning to open the left arm, bend the elbow and keep the hand on the chest, so the upper back turns without the arm being pulled behind the body.",
                steps: () => steps(1, 120, { sides: true })
            },
            {
                name: "Bed-edge lat and triceps stretch",
                sets: "2 × 45 seconds, then 30 seconds toward each side",
                desc: "Kneel facing a bed edge or chair seat, elbows on it shoulder-width apart, palms together. Sit the hips back toward the heels and let the chest sink toward the floor until you feel a stretch along the sides of the back. Then bend the elbows so the hands drop behind the head, which adds the backs of the upper arms. For the side holds, shift the hips toward one side to stretch that side's lat.",
                caution: "Stop where the ache starts, even if the chest barely drops.",
                steps: () => [
                    { label: "Hold 1 of 2", secs: 45 },
                    { label: "Hold 2 of 2", secs: 45 },
                    { label: "Toward the right", secs: 30 },
                    { label: "Toward the left", secs: 30 }
                ]
            },
            {
                name: "Towel chest opener",
                sets: "2 × 60 seconds",
                desc: "Roll a towel lengthwise and lie on it along the spine, head supported, knees bent. Rest the arms out to the sides in a goalpost shape, elbows bent 90° and level with the shoulders, palms up, and let gravity open the chest. Slide the arms a little higher for the second set.",
                caution: "Keep the left arm in the goalpost at shoulder height (90°), not lower, since lower angles cause a twinge at the back of the shoulder. Prop the left forearm on a folded towel, and raise the prop until there is no twinge; if one remains, skip the left side. Avoid doorway chest stretches on the left until week 7.",
                steps: () => steps(2, 60)
            },
            {
                name: "Overhead reach",
                sets: "2 × 60 seconds",
                desc: "Lie on your back, knees bent, low back pressed flat, a 0.5 L bottle in each hand. Let the straight arms sink toward the floor overhead and relax, breathing out. Keep the low back flat; if it arches, the stretch has moved out of the shoulders.",
                caution: "Weeks 1–6: no bottle. A stretch along the outer edge of the shoulder blade, under the armpit, is the target: those are the lats, which limit the overhead reach. Stop for anything sharp, anything at the front or top of the shoulder, or an ache that lasts to the next morning.",
                steps: () => steps(2, 60)
            },
            {
                name: "Floor angels",
                sets: "2 × 10, slowly",
                desc: "Same position, arms on the floor in a goalpost shape. Slide them along the floor up overhead and back down, keeping the elbows, backs of the hands and low back as close to the floor as they will go. This trains the muscles to use the new range.",
                caution: "Stay in the pain-free part of the range, even if that is only halfway up.",
                steps: () => steps(2, 60)
            }
        ]
    },
    {
        name: "Day Off Shoulders",
        note: "On days without the main workout, about 5 minutes after the mobility. On main workout days, the workout covers these.",
        exercises: [
            {
                name: "Side-lying external rotation",
                sets: "2 × 15 per side",
                desc: "Lie on your side, a 0.5–1 L bottle in the top hand, elbow bent 90° and pinned to the side on a rolled towel. Rotate the forearm up in 2 seconds, hold 2 seconds, lower in 3 seconds. Stay light; this is endurance work for the rotator cuff.",
                steps: () => steps(2, 105, { sides: true })
            },
            {
                name: "Prone Y and T raises",
                sets: "1 × 6 of each, 8-second holds",
                desc: "Face down on a bed or floor. Y: arms overhead at 45°, thumbs up. T: arms straight out to the sides, thumbs up. Lift, hold 8 seconds, lower. Stop the set early if the shoulders creep up toward the ears, the low back arches to get the arms higher, or the left shoulder starts to hurt: a lower lift held well beats a high one held badly. No weight at first, then 0.5 L bottles.",
                caution: "Pain-free range only. If the left thumb will not turn up in the T, do the left T palm down, with the arm angled a little toward the hips, and lift only until the arm is level with the body, not above it. If that still bothers the front of the shoulder, skip the left T. The same goes for the Y. Turning the thumb up needs outward rotation, which the external rotation exercise is building; retry thumb-up every 2 weeks.",
                steps: () => steps(1, 75, { parts: ["Y raise", "T raise"] })
            }
        ]
    },
    {
        name: "Left shoulder rehab",
        note: "Every day, about 5 minutes. Pain up to 3/10 is fine if it is back to normal by the next morning; if not, go back a stage. Move on only when the current stage is pain-free and its week has come.",
        exercises: [
            {
                name: "Internal rotation (subscapularis), both sides",
                sets: "Weeks 1–6: 5 × 30 seconds per side, daily, alternating sides, with 30 seconds' rest after each pair. Weeks 7–12: 2 × 15 per side, on main workout days",
                desc: "Weeks 1–6, hold: stand next to the edge of a door frame or a wall corner, elbow bent 90° against your side, forearm pointing straight ahead, palm facing your stomach, with the edge of the frame against the palm. Press the palm toward your stomach at half effort, building to about 70% by week 6. Nothing moves: the frame is only something fixed to push against. From week 7: lie on that side with the elbow bent 90° on a folded towel and a 0.5–1 L bottle in the hand. Raise the forearm toward your stomach in 2 seconds and lower it in 3 seconds. Light and pain-free only.",
                caution: "If lying on it hurts, keep doing the hold for that side.",
                figure: {
                    caption: "Weeks 1–6 hold, right arm, seen from above. Mirror it for the left.",
                    svg: `<svg viewBox="0 0 260 210" role="img" aria-label="Seen from above: elbow at the side, forearm pointing forward, palm pressing sideways against the end of a wall toward the stomach">
  <rect x="10" y="48" width="152" height="22" class="fig-wall"/>
  <text x="14" y="40" class="fig-label">door frame or wall corner</text>
  <ellipse cx="120" cy="160" rx="62" ry="22" class="fig-body"/>
  <circle cx="120" cy="158" r="17" class="fig-body"/>
  <text x="120" y="200" text-anchor="middle" class="fig-label">you, facing up the page</text>
  <line x1="178" y1="160" x2="178" y2="78" class="fig-arm"/>
  <circle cx="178" cy="160" r="6" class="fig-joint"/>
  <ellipse cx="172" cy="66" rx="9" ry="13" class="fig-hand"/>
  <text x="192" y="164" class="fig-label">elbow</text>
  <text x="192" y="178" class="fig-label">at side</text>
  <text x="192" y="112" class="fig-label">forearm</text>
  <text x="192" y="126" class="fig-label">forward</text>
  <path d="M150 100 L118 100" class="fig-arrow"/>
  <path d="M124 94 L116 100 L124 106" class="fig-arrow"/>
  <text x="134" y="92" text-anchor="middle" class="fig-label fig-strong">press</text>
  <text x="192" y="62" class="fig-label">palm on</text>
  <text x="192" y="76" class="fig-label">the edge</text>
</svg>`
                },
                steps: (week) => week <= 6 ? steps(5, 30, { sides: true, rest: 30 }) : steps(2, 75, { sides: true })
            },
            {
                name: "Stage 1, weeks 1–2: biceps isometric hold",
                sets: "5 × 45 seconds, once or twice a day",
                desc: "Sit at a table, left elbow bent 90° against your side, palm up. Press the forearm up into the underside of the table at about half effort. Rest 1 minute between holds.",
                steps: () => steps(5, 45, { rest: 60 })
            },
            {
                name: "Stage 2, weeks 3–6: slow lowering curl",
                sets: "3 × 15, 1 minute's rest between sets, every other day; the Stage 1 hold on the days between",
                desc: "Standing, elbow at your side, palm up, a 1.5–2 L bottle in the left hand. Lift it with help from the right hand, then lower it with the left arm alone in 3–4 seconds.",
                progress: "At 3 × 15 easy, use 3–4 L in the jug.",
                steps: () => steps(3, 90, { rest: 60 })
            },
            {
                name: "Stage 3, weeks 7–12: full curl",
                sets: "3 × 12, 1 minute's rest between sets, on main workout days",
                desc: "The left arm joins the main workout's biceps curl, 2 seconds up and 3 seconds down, starting with 4–6 L in the jug even if the right arm uses more.",
                progress: "Add 1 L when 3 × 12 is easy. Once this is pain-free, return to close-grip and full-depth pushups.",
                steps: () => steps(3, 60, { rest: 60 })
            }
        ]
    },
    {
        name: "Warm-up",
        note: "5 minutes, every main workout. The four moves in order.",
        exercises: [
            {
                name: "Shoulder rolls",
                sets: "10 backward, then 10 forward",
                desc: "Arms hanging relaxed, roll the shoulders up, back and down in slow circles. These replace arm circles, which swing the arm fast through the positions the left shoulder dislikes.",
                steps: () => steps(1, 40)
            },
            {
                name: "Wall slides, facing the wall",
                sets: "10 reps",
                desc: "Stand a short step from a wall, facing it, forearms on the wall with the little-finger sides touching, elbows shoulder-width apart and level with the shoulders. Slide the forearms up the wall toward a Y, keeping them on it, only as high as you can without arching the low back, then back down. Keep the shoulders down away from the ears: the shoulder blades turn upward by themselves as the arms rise, but don't shrug.",
                progress: "The back-to-the-wall version needs more upper-back and chest flexibility than you have yet. Retry it with the overhead test every 2 weeks: head, shoulder blades, bottom and the backs of the hands all on the wall at once is a sign the mobility work is paying off. The low back keeps its natural small gap, about a flat hand's thickness; don't press it flat.",
                caution: "Stop below any pinch at the top or front of the shoulder, even if the right arm goes higher.",
                steps: () => steps(1, 40)
            },
            {
                name: "Scapular pushups",
                sets: "10 reps",
                desc: "In pushup position with arms straight, let the chest sink between the shoulder blades, then push away.",
                steps: () => steps(1, 30)
            },
            {
                name: "Easy incline pushups",
                sets: "5 reps",
                desc: "Hands on a kitchen counter or table edge, body straight, elbows at 45°, full range at an easy, steady pace. Leaning on a counter makes them about half the work of floor pushups, which is the point: they rehearse the pushup before the real sets. Stop the left side before the shoulder goes behind the body at the bottom, as in the main workout.",
                steps: () => steps(1, 20)
            }
        ]
    },
    {
        name: "Main workout",
        note: "About 40 minutes, every other day. Pairs: one set of the first, one set of the second, rest 60 seconds, repeat. Then the finishers. Tempo unless stated: 2 seconds down, 1 second pause, 1 second up.",
        exercises: [
            pair(
                "Pair 1: pushups + jug row",
                {
                    name: "Pushups, elbows at 45°",
                    short: "Pushups",
                    sets: "3 × 10–15. Pair 1, with the jug row",
                    desc: "Floor, body straight, chest down to a fist-height point.",
                    progress: "At 3 × 15, slow the lowering to 4 seconds, then put the feet on a chair and go back to 3 × 10.",
                    caution: "Stop 5 cm higher, or use an incline, so the shoulder does not go behind the body at the bottom. Go to full depth once the front of the shoulder is pain-free.",
                    steps: () => steps(3, 50)
                },
                {
                    name: "One-arm jug row",
                    short: "Jug row",
                    sets: "3 × 10 per arm. Pair 1",
                    desc: "Free hand and knee on a chair, back flat. Pull the full 20 L jug to the hip, hold 1 second at the top, lower in 3 seconds.",
                    progress: "At 3 × 12, hold 2 seconds at the top, or do inverted rows under a sturdy table.",
                    caution: "Half-full jug (10 L), palm facing your body, and stop when the elbow is level with the torso. Back to the full jug once pain-free.",
                    steps: () => steps(3, 60, { sides: true })
                }
            ),
            pair(
                "Pair 2: pike pushups + biceps curl",
                {
                    name: "Pike pushups",
                    short: "Pike pushups",
                    sets: "3 × 6–10. Pair 2, with the biceps curl",
                    desc: "Hands shoulder-width, hips high, elbows tucked 30–45°, head lands slightly in front of the hands, 3 seconds down. If these are too hard or uncomfortable, press a half-full jug overhead with both hands instead, 3 × 8–12.",
                    progress: "At 3 × 10, feet on a chair and back to 3 × 6.",
                    caution: "Skip until a week of mornings without the ache, at the earliest in week 3. Restart with the jug press.",
                    steps: () => steps(3, 45)
                },
                {
                    name: "Biceps curl",
                    short: "Curl",
                    sets: "3 × 10–12 per arm. Pair 2",
                    desc: "Stand tall, elbow at your side, and curl the jug by its handle, starting with 8–10 L. 2 seconds up, 3 seconds down, no swinging.",
                    progress: "Add 1–2 L when 3 × 12 is easy.",
                    caution: "Right arm only in weeks 1–6, while the left does its rehab stage. From week 7, the left joins at a lighter load (Stage 3).",
                    steps: (week) => week <= 6 ? steps(3, 55, { parts: ["Right"] }) : steps(3, 55, { sides: true })
                }
            ),
            pair(
                "Pair 3: close-grip pushups + scaption",
                {
                    name: "Close-grip pushups",
                    short: "Close-grip",
                    sets: "3 × 8–12. Pair 3, with the scaption raise",
                    desc: "Hands at shoulder width or slightly narrower, elbows brushing the ribs. Use an incline (bed edge, table) high enough to get 8 clean, pain-free reps.",
                    progress: "At 3 × 12, use a lower incline. The goal is the floor.",
                    caution: "Skip in weeks 1–6, because tucked elbows pull the shoulder furthest behind the body at the bottom. Restart on a high incline in week 7.",
                    steps: () => steps(3, 45)
                },
                {
                    name: "Scaption raise",
                    short: "Scaption",
                    sets: "3 × 12–15. Pair 3",
                    desc: "Standing, a 1.5–2 L bottle in each hand, thumbs up. Raise the straight arms to shoulder height, angled about 30° forward of straight out to the sides, in 2 seconds, and lower in 3 seconds.",
                    progress: "At 3 × 15, hold 2 seconds at the top.",
                    caution: "Light and pain-free; stop below shoulder height if the top of the lift hurts.",
                    steps: () => steps(3, 65)
                }
            ),
            pair(
                "Pair 4: triceps extension + external rotation",
                {
                    name: "Overhead triceps extension",
                    short: "Triceps",
                    sets: "3 × 10–12. Pair 4, with the external rotation",
                    desc: "Standing or seated, a 1.5–2 L bottle in both hands behind the head, straighten the arms overhead. If the shoulder complains, do it lying on your back, elbows pointing up, bending only at the elbows.",
                    progress: "At 3 × 12, use a heavier bottle or 4–6 L in the jug.",
                    caution: "Lying version only until week 7.",
                    steps: () => steps(3, 45)
                },
                {
                    name: "Side-lying external rotation",
                    short: "Ext. rotation",
                    sets: "2 × 15 per side. Pair 4",
                    desc: "Lie on your side, a 0.5–1 L bottle in the top hand, elbow bent 90° and pinned to the side on a rolled towel. Rotate the forearm up in 2 seconds, hold 2 seconds, lower in 3 seconds.",
                    progress: "At 2 × 15 easy, the next bottle size up. Stay light.",
                    steps: () => steps(2, 105, { sides: true })
                }
            ),
            {
                name: "Prone Y and T raises",
                sets: "2 × 6 of each, 8-second holds, 30 seconds' rest between rounds. Finisher",
                desc: "Face down on a bed or floor. Y: arms overhead at 45°, thumbs up. T: arms straight out to the sides, thumbs up. Lift, hold 8 seconds, lower. Stop the set early if the shoulders creep up toward the ears, the low back arches to get the arms higher, or the left shoulder starts to hurt: a lower lift held well beats a high one held badly.",
                caution: "Pain-free range only. If the left thumb will not turn up in the T, do the left T palm down, with the arm angled a little toward the hips, and lift only until the arm is level with the body, not above it. If that still bothers the front of the shoulder, skip the left T. The same goes for the Y. Turning the thumb up needs outward rotation, which the external rotation exercise is building; retry thumb-up every 2 weeks.",
                steps: () => steps(2, 75, { parts: ["Y raise", "T raise"], rest: 30 })
            },
            {
                name: "Farmer carry or hold",
                sets: "3 × 45 seconds per hand. Finisher",
                desc: "Full 20 L jug in one hand, stand tall, shoulders level. Walk if there is room, or stand still.",
                progress: "At 3 × 60 seconds, keep the time and add a slow walk.",
                steps: () => steps(3, 45, { sides: true })
            }
        ]
    }
];

const WORKOUT_PHASES = [
    { upTo: 2, name: "Weeks 1–2: calm the tendon" },
    { upTo: 6, name: "Weeks 3–6: load the tendon" },
    { upTo: 12, name: "Weeks 7–12: rebuild strength" },
    { upTo: Infinity, name: "After week 12: keep the range" }
];
