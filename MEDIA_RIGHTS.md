# Media Rights and Provenance

> Licensing checkpoint, September 30, 2026: the current project policy is
> [Forge Game Hosting License 1.0](LICENSE); see [LICENSING.md](LICENSING.md).
> All earlier MIT grants and separately licensed media terms recorded below
> remain available. References below to MIT describe the preserved grants, not
> a blanket grant for newly authored Forge-covered material. The original MIT
> notice is retained in [LICENSE-LEGACY-MIT.txt](LICENSE-LEGACY-MIT.txt).

The MIT License applies to source code. It does not automatically apply to media.

## Active generated images

| File | Provider | Created | Status | Use |
|---|---|---:|---|---|
| `public/images/law-commission.jpg` | OpenAI image generation through Codex | 2026-07-12 | Project-generated; review before final public release | 527-531 law, court, and command stages |
| `public/images/nika-hippodrome.jpg` | OpenAI image generation through Codex | 2026-07-12 | Project-generated; review before final public release | January 532 Hippodrome and Nika stages |

Both files are generated historical reconstructions, not documentary images. The UI labels them accordingly.

## Original strategic map

The Mediterranean theater schematic is drawn in application code in `src/components/TheaterMap.jsx`. It is an original, deliberately simplified interface graphic showing strategic relationships and supply routes. It is not an archival map, a tactical reconstruction, or a claim about exact historical borders or troop positions.

The epidemic and administrative crisis register is likewise drawn entirely with application code in `src/components/CrisisPanel.jsx`. It is a game-state interface, not historical medical imagery.

## Soundtrack recordings

The soundtrack is opt-in and self-hosted. The local MP3 files are Wikimedia Commons browser transcodes of the exact source recordings listed below. No musical or editorial changes were made. The code license does not apply to these recordings.

| Local file | Work and performer | Rights | Source and verification | SHA-256 |
|---|---|---|---|---|
| `public/audio/bach-goldberg-aria.mp3` | J.S. Bach, *Goldberg Variations: Aria*; Kimiko Ishizaka | CC0 1.0 Universal | [Free Music Archive track and license](https://freemusicarchive.org/music/Kimiko_Ishizaka/The_Open_Goldberg_Variations/KIMIKO_ISHIZAKA_-_Goldberg_Variations_BWV_988_-_01_-_Aria__44k-24b/); [Commons transcode source](https://commons.wikimedia.org/wiki/File:Kimiko_Ishizaka_-_01_-_Aria.ogg) | `f0b319eece23b4ccc2e969e1329f96b9f96027e794d073c7adf606dc26463f08` |
| `public/audio/handel-water-music-sarabande.mp3` | G.F. Handel, *Water Music: Sarabande*; U.S. Marine Band, Marine Chamber Orchestra | Composition public domain; federal performance and recording public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Handel%27s_Water_Music_-_16._Sarabande_-_Chamber_Orchestra_-_United_States_Marine_Band.opus) | `d95226714dfd71bbe2398866d38591ba6c737c317e6a5385deb06a84a67ead4a` |
| `public/audio/holst-venus.mp3` | Gustav Holst, *Venus, the Bringer of Peace*; U.S. Air Force Heritage of America Band | Composition public domain; federal performance and recording public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Holst-_venus.ogg) | `cceac999c61560ee867b88f45ec1e51c3b1f76b88a698b49b960ea3bd6453f63` |
| `public/audio/holst-mars.mp3` | Gustav Holst, *Mars, the Bringer of War*; U.S. Air Force Heritage of America Band | Composition public domain; federal performance and recording public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Holst-_mars.ogg) | `395a71de2daaf5cbd67b5f4f63a72090d2466968727a55abd69a0626b4aa0bb0` |

Rights checked and local copies downloaded on 2026-07-13. The UI retains performer, rights, and source information even where attribution is not legally required.

## Prompt summaries

`law-commission.jpg` requested a panoramic museum-reconstruction-style scene of Justinian presiding over Roman jurists and scribes around 528, using plausible sixth-century clothing, writing materials, and imperial architecture.

`nika-hippodrome.jpg` requested a panoramic museum-reconstruction-style scene of the united Blues and Greens in the Hippodrome of Constantinople during January 532, with the imperial quarter burning beyond and guards holding the arena approaches.

## Release rule

Before public release, record provider terms applicable on the creation date and complete a visual historical review. Any museum, archive, map, recording, or third-party image added later must include creator, institution, object date, source URL, license, file hash, crop notes, and active scenario IDs.
