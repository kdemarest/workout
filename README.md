# workout

Phone pages for timed exercise plans. Pick an exercise, read it, tap **Go**: it counts down the current step (a set, a side, a hold, or a rest between sets) and beeps once when time is up, then moves to the next step.

- **Ken:** https://kdemarest.github.io/workout/ken/, from the Google Doc "Ken Arms".
- **Lulu:** https://kdemarest.github.io/workout/lulu/, from the Google Doc "Rehab Lulu".

On an iPhone, open the page in Safari, then Share → Add to Home Screen: it opens full-screen like an app and works offline after the first visit. Changes reach it the next time it opens with a connection.

## Files

- `app.js`, `app.css`: the page, shared by everyone. `plan.js`: the `steps()` and `pair()` helpers and the format of an exercises file.
- `<person>/exercises.js`: that person's plan, copied from their doc, which is the master copy: update this file when the doc changes. Rep-based sets are timed from their tempo.
- `<person>/index.html`, `manifest.webmanifest`, `icon-*.png`: that person's page and home-screen app. The `index.html` files are the same apart from the title.
- `sw.js`: offline support (network first, cache when offline).
- `index.html`: a list of the people.

## Behaviour

- The week number counts from `PLAN_START` in each exercises file; steps that change with the week follow it.
- −5 / +5 adjusts an exercise's working steps (not its rests) and is remembered on that device, per person.
- Each main-workout pair is one entry (`pair()`): its steps run set A, set B, rest, repeated, and the card shows whichever exercise the current step belongs to; tabs or a sideways swipe on the card switch between the two. Each entry keeps its place while you switch away.
- The screen stays on while a timer runs. On iPhone the beep plays as media, so the silent switch doesn't mute it.

## Adding a person

Copy a person's folder, edit `exercises.js`, the title in `index.html` and `manifest.webmanifest`, make icons (`magick`), and add a link to the top `index.html`.

## Working on it

`runWorkout` serves this folder at http://localhost:8095/ and opens Ken's page; `runWorkout stop` stops it. Also a Termux:Widget button. Plain browser scripts, no dependencies or build; `jslint workout` after edits. Publishing is a push to `main` (GitHub Pages serves the repo root).
