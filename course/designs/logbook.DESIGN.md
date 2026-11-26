# Design: Logbook

**Mood:** a well-used dive logbook. Warm paper, navy ink, a red validation stamp. Flat, tactile, precise.

## Palette (light / dark)
| Token | Light | Dark |
|---|---|---|
| bg | #f3ead6 | #111827 |
| bg2 | #e8dcc0 | #1a2438 |
| surface-solid | #fffaf0 | #182235 |
| ink | #14213d | #efe6d0 |
| muted | #4d5468 | #a7b0c3 |
| accent (stamp red) | #a3191f | #ff7468 |
| accent-ink | #ffffff | #1b0a09 |
| tank / band | #e0a82e / #1f6b3a | #f0c050 / #5fd08a |
| bad | #b42318 | #ff8a80 |
| warn | #8a5a00 | #f0c050 |

Contrast (AA 4.5:1): ink, muted and accent-ink all pass in both modes.

## Type
Display Fraunces (serif), body IBM Plex Sans, mono IBM Plex Mono.

## Shape
Radius 6px. Flat 2px offset shadows, no blur. Fully opaque-feeling surfaces, no background glow.

## Do
- Use red sparingly, like a stamp: primary actions and active state.
- Keep headings serif, data and figures mono.

## Don't
- No glassmorphism, blur or gradients.
- No radius above 8px.
