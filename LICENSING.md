# Licensing checkpoint: Titans of War: Rome Reconquest

Checkpoint: **FG-LIC-20260930-10-GH1**. Recorded September 30, 2026.

## Current policy

The current project licensing policy is [Forge Game Hosting License 1.0](LICENSE).
This is a source-available licence, not an OSI-approved open-source licence.
For newly supplied, Licensor-controlled material covered by those terms, a company
with gross annual revenue **over US$1,000,000**, including its controlled
subsidiaries, needs a separate written agreement before publicly hosting its own
playable copy. Ordinary play, private internal/classroom use, official links and
authorized platform-served embeds are excluded as defined in the full licence.
[Contact Titans Forge](https://titans-forge.itch.io/).

Copyright (c) 2026 Titans Forge LLC for the newly authored checkpoint and
release-notice staging support. Attribution for existing components is retained.

## Earlier MIT grants remain available

The last pre-checkpoint default-branch commit is
[`6fba56ee2a6dd03941befa473894d7182d17d7f0`](https://github.com/JCapone83/Titans_of_War_Rome_Reconquest/tree/6fba56ee2a6dd03941befa473894d7182d17d7f0),
with tree `4c58899b76b50a8fcc622aee82cbd84a7dfc61a0`.
Its original MIT notice is retained **byte-for-byte** as
[LICENSE-LEGACY-MIT.txt](LICENSE-LEGACY-MIT.txt).

- Previous MIT notice Git blob: `b4711767fcb3d539183836648ed2439f181478d4`.
- Previous MIT notice SHA-256: `3780b6186f5e587b2eefdf0b828864fbf97ed9295e162a12765785c56f00f39d`.
- Approved Forge licence SHA-256: `28638be413f7815704fe68aed52a4ea4cb7bd4d28b35f2dca9b78d438a4a90bf`.

All source already published at that commit keeps its MIT permissions.
Identical previously MIT-licensed material remains usable and hostable under MIT;
this checkpoint does not retroactively impose a hosting fee on it.
This is a licensing/documentation/release-support change, **not a gameplay upgrade**.
The package version remains `0.6.0`; no old tag, release or history is
rewritten. Newly authored checkpoint documents and staging support are expressly
offered under the Forge terms. Future covered game changes need their own
identifiable release boundary. Modifications to previously MIT files do not erase
the original MIT grant over the earlier material.

## Media, dependencies and distribution

Existing media, third-party software, fonts and separately licensed assets retain
their original terms and required attribution. Existing rights records are not
replaced by the root licence. Earlier blanket MIT grants over project-authored
interface assets or documentation also remain available. No new rights over
third-party media or trademarks are asserted.

The machine-readable record is [LICENSING_CHECKPOINT.json](LICENSING_CHECKPOINT.json).
It identifies this GitHub policy boundary only; equivalence with the currently
hosted itch.io build is not certified.

`npm run build` stages the full current licence, preserved MIT notice and
checkpoint in `dist/` after Vite succeeds, alongside any media/NOTICE records.
Markdown rights documents are packaged as text so production-only ZIP checks
continue to work. Direct `vite build` bypasses npm's lifecycle hook: before
redistribution, run `node scripts/stage-release-licenses.mjs` and then
`node scripts/stage-release-licenses.mjs --check`.
The staging script changes no gameplay file and performs no network requests.
