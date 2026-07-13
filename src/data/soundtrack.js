export const soundtrackTracks = [
  {
    id: 'bach-aria',
    title: 'Goldberg Variations: Aria',
    composer: 'Johann Sebastian Bach',
    performer: 'Kimiko Ishizaka',
    license: 'CC0 1.0 Universal',
    src: './audio/bach-goldberg-aria.mp3',
    source: 'https://freemusicarchive.org/music/Kimiko_Ishizaka/The_Open_Goldberg_Variations/KIMIKO_ISHIZAKA_-_Goldberg_Variations_BWV_988_-_01_-_Aria__44k-24b/',
  },
  {
    id: 'handel-sarabande',
    title: 'Water Music: Sarabande',
    composer: 'George Frideric Handel',
    performer: 'United States Marine Band, Marine Chamber Orchestra',
    license: 'Public domain - U.S. federal work',
    src: './audio/handel-water-music-sarabande.mp3',
    source: "https://commons.wikimedia.org/wiki/File:Handel's_Water_Music_-_16._Sarabande_-_Chamber_Orchestra_-_United_States_Marine_Band.opus",
  },
  {
    id: 'holst-venus',
    title: 'Venus, the Bringer of Peace',
    composer: 'Gustav Holst',
    performer: 'United States Air Force Heritage of America Band',
    license: 'Public domain - U.S. federal work',
    src: './audio/holst-venus.mp3',
    source: 'https://commons.wikimedia.org/wiki/File:Holst-_venus.ogg',
  },
  {
    id: 'holst-mars',
    title: 'Mars, the Bringer of War',
    composer: 'Gustav Holst',
    performer: 'United States Air Force Heritage of America Band',
    license: 'Public domain - U.S. federal work',
    src: './audio/holst-mars.mp3',
    source: 'https://commons.wikimedia.org/wiki/File:Holst-_mars.ogg',
  },
]

export function parseStoredVolume(value) {
  if (value === null || value === '') return 0.24
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed >= 0 && parsed <= 1 ? parsed : 0.24
}

const WAR_SCENARIOS = new Set([
  'persian_command', 'dara_aftermath', 'callinicum_accounting',
  'nika_outbreak', 'palace_council', 'nika_resolution',
  'vandal_council', 'african_logistics', 'ad_decimum', 'tricamarum',
  'italy_mandate', 'sicilian_opening', 'defense_of_rome', 'divided_italian_command',
  'persian_invasion_540', 'antioch_540', 'eastern_terms_541', 'totila_resurgence',
  'italy_without_resources', 'africa_renewed_war',
  'italy_commitment_549', 'taginae', 'mons_lactarius', 'frankish_invasion_554',
  'kutrigur_threat_559',
])

const PEACE_SCENARIOS = new Set([
  'nika_aftermath', 'rebuild_capital', 'eternal_peace',
  'africa_settlement', 'african_aftershock', 'ravenna_offer',
  'pragmatic_sanction_554', 'expanded_frontier_555',
  'reconstruction_revenue_557', 'persian_peace_562',
])

const COURT_SCENARIOS = new Set([
  'accession_council', 'law_commission', 'revenue_reform', 'hippodrome_petitions',
  'failed_executions', 'amal_succession', 'three_chapters_crisis',
  'late_religious_policy_564', 'succession_565', 'imperial_audit_565',
  'theodora_network_pressure', 'theodora_death_548',
])

export function soundtrackTrackIdForScenario(scenarioId) {
  if (WAR_SCENARIOS.has(scenarioId)) return 'holst-mars'
  if (PEACE_SCENARIOS.has(scenarioId)) return 'holst-venus'
  if (COURT_SCENARIOS.has(scenarioId)) return 'handel-sarabande'
  return 'bach-aria'
}
