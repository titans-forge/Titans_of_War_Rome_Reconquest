# Titans of War: Rome Reconquest

[Play on itch.io](https://titans-forge.itch.io/titans-of-war-rome-reconquest) ·
[Forge source](https://github.com/titans-forge/Titans_of_War_Rome_Reconquest) ·
[Report an issue](https://github.com/titans-forge/Titans_of_War_Rome_Reconquest/issues) ·
[Game collection](https://github.com/titans-forge/educational-games)

The existing repository moved from JCapone83 to Titans Forge on September 30,
2026, retaining its history, tags, release assets and licensing checkpoints.
Historical owner names in those records remain intentional; earlier MIT grants
and separate media rights are preserved. The source branch is not certified to
match the current itch.io build.

Rule the Roman Empire through law, war, faction, revolt, and western reconquest.

This repository contains five playable acts covering the opening of Justinian's reign, the Nika revolt, the western reconquests, renewed Persian war, Totila's resurgence, the plague, Theodora's death, the second reconquest, and the final burden of defending and transferring the restored empire, 527-565.

## Play locally

```bash
git clone https://github.com/titans-forge/Titans_of_War_Rome_Reconquest.git
cd Titans_of_War_Rome_Reconquest
npm install
npm run dev
```

## Verify and package

```bash
npm test
npm run build
npm run build:itch
```

## Current systems

- Sixty authored decision stages with shorter consolidation branches.
- Persistent appointments in law, revenue, eastern command, and western command.
- Separate Imperial Reach and Provincial Resilience measures.
- Treasury, grain, field forces, and imperial attention.
- Senate, Blues, Greens, army, Church, and Theodora relationships.
- Delayed consequences recorded in the Imperial Ledger.
- Conditional Nika options and early endings.
- A strategic theater schematic for eastern and Balkan security, fleet readiness, and separate control and settlement measures in Africa, Italy, and Spania.
- A structural crisis system tracking epidemic burden, burial capacity, labor, administrative continuity, and succession confidence.
- Versioned local browser saves with migration from the Act I through Act IV releases.
- Historical context and source notes.
- An opt-in, self-hosted four-track classical soundtrack with scenario-aware recommendations, playback controls, and visible rights information.
- Separate final grades and descriptive historical divergence.
- Multiple Act II settlements: eastern consolidation, partition, direct recovery, or a divided imperial arrangement.
- Distinct Act III outcomes based on whether personal court networks become institutions, are centralized, or are dismantled.
- A second-reconquest arc covering Germanus, Narses, coalition recruitment, Taginae, Gothic surrender, Mons Lactarius, Frankish intervention, and the 554 Pragmatic Sanction.
- A limited Spanish intervention and the Three Chapters controversy, with explicit uncertainty where the source record does not support a single confident reconstruction.
- A final-reign arc covering the enlarged frontier, provincial reconstruction, the Kutrigur emergency, the fifty-year Persian peace, Justinian's last doctrinal intervention, and the succession of 565.
- State-based final outcomes that judge the accumulated reign by provincial durability, military dependence, fiscal and demographic reserves, succession, and the relation between the restored map and the state beneath it.

The core campaign is deterministic and requires no AI model or network connection.

## Historical method

The game follows the Titans Forge Social Science Rubric. Contemporary sources are identified by work and genre. Procopius's *Wars*, *Buildings*, and *Secret History* are not treated as one neutral narrative. Uncertain or disputed claims are labeled in the historical context panel.

See [ROME_RECONQUEST_PRODUCTION_PLAN.md](./ROME_RECONQUEST_PRODUCTION_PLAN.md) for the full design and implementation plan.

## License

Current project policy: [Forge Game Hosting License 1.0](LICENSE), with the
release boundary recorded in [LICENSING.md](LICENSING.md) and
[LICENSING_CHECKPOINT.json](LICENSING_CHECKPOINT.json).

For newly covered material, companies with gross annual revenue **over
US$1,000,000** need a separate written licence to publicly host their own playable
copy. Ordinary playing and private internal/classroom use do not require one.
See the full terms for platform embeds, revenue calculation and exceptions.

**Earlier MIT permissions remain available.** The original notice is preserved in
[LICENSE-LEGACY-MIT.txt](LICENSE-LEGACY-MIT.txt). Previously MIT-licensed code,
documentation and assets keep those grants, including hosting rights for the same
material. Existing media and third-party rights/credits remain unchanged.
This policy update does not rewrite old releases or make identical MIT material
exclusively Forge-licensed. Future covered game changes need a distinct release
boundary. [Commercial inquiries](https://titans-forge.itch.io/).
