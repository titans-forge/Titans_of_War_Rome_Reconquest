# Titans of War: Rome Reconquest

Rule the Roman Empire through law, war, faction, revolt, and western reconquest.

This repository contains five playable acts covering the opening of Justinian's reign, the Nika revolt, the western reconquests, renewed Persian war, Totila's resurgence, the plague, Theodora's death, the second reconquest, and the final burden of defending and transferring the restored empire, 527-565.

## Play locally

```bash
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

Code is released under the MIT License. Media has separate rights and provenance recorded in [MEDIA_RIGHTS.md](./MEDIA_RIGHTS.md).
