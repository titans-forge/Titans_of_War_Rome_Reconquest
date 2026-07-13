import test from 'node:test'
import assert from 'node:assert/strict'
import { endings, scenarios, scenarioById } from '../src/data/scenarios.js'
import { parseStoredVolume, soundtrackTrackIdForScenario, soundtrackTracks } from '../src/data/soundtrack.js'
import { createInitialState } from '../src/game/initialState.js'
import {
  chooseOption,
  historicalDivergence,
  optionAvailability,
  restoreState,
  serializeState,
} from '../src/game/simulationEngine.js'

test('the soundtrack catalog is local, unique, and mapped to campaign moods', () => {
  assert.equal(soundtrackTracks.length, 4)
  assert.equal(new Set(soundtrackTracks.map((track) => track.id)).size, 4)
  soundtrackTracks.forEach((track) => {
    assert.match(track.src, /^\.\/audio\/[a-z0-9-]+\.mp3$/)
    assert.match(track.source, /^https:\/\//)
    assert.ok(track.license)
  })
  assert.equal(soundtrackTrackIdForScenario('accession_council'), 'handel-sarabande')
  assert.equal(soundtrackTrackIdForScenario('kutrigur_threat_559'), 'holst-mars')
  assert.equal(soundtrackTrackIdForScenario('persian_peace_562'), 'holst-venus')
  assert.equal(soundtrackTrackIdForScenario('constantinople_plague'), 'bach-aria')
  scenarios.forEach((scenario) => {
    assert.ok(soundtrackTracks.some((track) => track.id === soundtrackTrackIdForScenario(scenario.id)))
  })
})

test('soundtrack volume defaults audibly and accepts valid saved values', () => {
  assert.equal(parseStoredVolume(null), 0.24)
  assert.equal(parseStoredVolume(''), 0.24)
  assert.equal(parseStoredVolume('0.4'), 0.4)
  assert.equal(parseStoredVolume('0'), 0)
  assert.equal(parseStoredVolume('not-a-number'), 0.24)
  assert.equal(parseStoredVolume('2'), 0.24)
})

test('all scenario routes and endings resolve', () => {
  scenarios.forEach((scenario) => {
    scenario.options.forEach((option) => {
      const route = option.route ?? scenario.next
      const ending = option.ending ?? scenario.ending
      if (scenario.id === 'imperial_audit_565') {
        assert.equal(route, undefined)
        assert.equal(ending, undefined)
        return
      }
      assert.ok(route ? scenarioById[route] : endings[ending], `${scenario.id}:${option.id} has no valid destination`)
    })
  })
})

test('the approximate historical path reaches Act II', () => {
  const path = [
    'working_household', 'appoint_tribonian', 'belisarius_command', 'fortify_and_train',
    'retain_with_inquiry', 'appoint_john', 'protect_blues', 'execute_again',
    'dismiss_officials', 'follow_theodora', 'converging_assault',
    'executions_confiscations', 'hagia_sophia',
  ]
  let state = createInitialState()
  path.forEach((choice) => { state = chooseOption(state, choice) })
  assert.equal(state.endingId, null)
  assert.equal(state.scenarioId, 'eternal_peace')
  assert.equal(state.history.length, 13)
  assert.ok(state.flags.massSuppression)
})

test('the western campaign can reach Ravenna and continue into Act III', () => {
  const path = [
    'fund_enduring_peace', 'authorize_african_expedition', 'balanced_expedition',
    'rally_before_pursuit', 'protect_city_markets', 'attack_vandal_center',
    'imperial_prefecture', 'fund_african_recovery', 'prepare_italian_intervention',
    'full_italian_restoration', 'storm_naples', 'hold_ports_and_reserves',
    'unify_under_belisarius', 'enter_for_justinian',
  ]
  let state = { ...createInitialState(), scenarioId: 'eternal_peace', resources: { ...createInitialState().resources, treasury: 90 } }
  path.forEach((choice) => { state = chooseOption(state, choice) })
  assert.equal(state.endingId, null)
  assert.equal(state.scenarioId, 'persian_invasion_540')
  assert.equal(state.history.length, 14)
  assert.ok(state.theaters.africaControl > 50)
  assert.ok(state.theaters.italyControl > 50)
})

test('declining the Italian war records consolidation and continues', () => {
  let state = { ...createInitialState(), scenarioId: 'amal_succession' }
  state = chooseOption(state, 'recognize_theodahad')
  assert.equal(state.scenarioId, 'persian_invasion_540')
  assert.equal(state.flags.italyDeclined, true)
})

test('the crisis path survives invasion, plague, and Theodora\'s death and reaches Act IV', () => {
  const path = [
    'buy_operational_time', 'reinforce_antioch', 'renew_eastern_war',
    'defend_tax_districts', 'fund_belisarius_return', 'protect_grain_route',
    'mobilize_burial_service', 'theodora_emergency_authority',
    'collect_existing_assessments', 'preserve_army_pay',
    'reinforce_african_command', 'preserve_informal_partnership',
    'absorb_network_into_palace',
  ]
  let state = { ...createInitialState(), scenarioId: 'persian_invasion_540' }
  path.forEach((choice) => { state = chooseOption(state, choice) })
  assert.equal(state.endingId, null)
  assert.equal(state.scenarioId, 'italy_commitment_549')
  assert.equal(state.history.length, 13)
  assert.ok(state.crisis.epidemicBurden >= 50)
  assert.ok(state.crisis.laborCapacity < createInitialState().crisis.laborCapacity)
})

test('the second reconquest can turn battlefield victory into civil government and continue', () => {
  const path = [
    'renew_second_reconquest', 'appoint_narses_second', 'meet_narses_terms',
    'recruit_balanced_coalition', 'adriatic_overland', 'hold_archer_wings',
    'offer_gothic_service_terms', 'blockade_mons_lactarius',
    'concentrate_against_franks', 'limited_spanish_enclave',
    'summon_general_council', 'local_italian_governors',
  ]
  let state = { ...createInitialState(), scenarioId: 'italy_commitment_549' }
  path.forEach((choice) => { state = chooseOption(state, choice) })
  assert.equal(state.endingId, null)
  assert.equal(state.scenarioId, 'expanded_frontier_555')
  assert.equal(state.history.length, 12)
  assert.ok(state.theaters.italyControl > 50)
  assert.ok(state.theaters.italySettlement > 50)
  assert.equal(state.theaters.spainControl, 22)
  assert.equal(state.flags.frankishInvasionDefeated, true)
})

test('Germanus death preserves a choice of successor', () => {
  let state = { ...createInitialState(), scenarioId: 'second_reconquest_command' }
  state = chooseOption(state, 'appoint_germanus_second')
  assert.equal(state.scenarioId, 'germanus_death_550')
  state = chooseOption(state, 'transfer_germanus_army_narses')
  assert.equal(state.scenarioId, 'narses_terms')
  assert.equal(state.appointments.westernCommand, 'narses')
})

test('declining a general Italian war still reaches the final-reign audit', () => {
  const path = ['limited_italian_corridor', 'defer_three_chapters', 'italian_compact_settlement']
  let state = { ...createInitialState(), scenarioId: 'italy_commitment_549' }
  path.forEach((choice) => { state = chooseOption(state, choice) })
  assert.equal(state.endingId, null)
  assert.equal(state.scenarioId, 'expanded_frontier_555')
  assert.equal(state.history.length, 3)
})

test('weak succession confidence can turn concealment into a crisis ending', () => {
  let state = { ...createInitialState(), scenarioId: 'justinian_illness', crisis: { ...createInitialState().crisis, successionConfidence: 30 } }
  state = chooseOption(state, 'conceal_imperial_illness')
  assert.equal(state.endingId, 'succession_crisis')
})

test('flight from the palace is a reachable ending', () => {
  const path = [
    'senatorial_compact', 'appoint_theophilus', 'sittas_command', 'press_for_peace',
    'recall_commander', 'provincial_audits', 'hear_joint_petition', 'pardon_survivors',
    'dismiss_officials', 'sail_from_city',
  ]
  let state = createInitialState()
  path.forEach((choice) => { state = chooseOption(state, choice) })
  assert.equal(state.endingId, 'flight')
})

test('a poorly coordinated counterstroke can lose the throne', () => {
  const path = [
    'divided_access', 'joint_law_board', 'divided_command', 'pursue_persians',
    'divide_future_authority', 'appoint_john', 'silence_factions', 'execute_again',
    'deploy_guards', 'follow_theodora', 'converging_assault',
  ]
  let state = createInitialState()
  path.forEach((choice) => { state = chooseOption(state, choice) })
  assert.equal(state.endingId, 'deposed')
})

test('delayed commitments resolve only when due', () => {
  let state = createInitialState()
  state = chooseOption(state, 'working_household')
  assert.equal(state.pending.length, 1)
  state = chooseOption(state, 'appoint_tribonian')
  state = chooseOption(state, 'belisarius_command')
  assert.equal(state.pending.some((item) => item.label.includes('Excluded great houses')), true)
  state = chooseOption(state, 'fortify_and_train')
  assert.equal(state.pending.some((item) => item.label.includes('Excluded great houses')), false)
})

test('requirements disable unaffordable choices', () => {
  const state = createInitialState()
  state.resources.treasury = 10
  const option = scenarioById.nika_resolution.options.find((item) => item.id === 'narses_bribes')
  assert.equal(optionAvailability(state, option).available, false)
})

test('save files round trip, migrate prior releases, and reject unknown versions', () => {
  const state = createInitialState()
  assert.deepEqual(restoreState(serializeState(state)), state)
  const migrated = restoreState(JSON.stringify({ ...state, version: 1, theaters: undefined }))
  assert.equal(migrated.version, 5)
  assert.equal(migrated.theaters.eastSecurity, 52)
  assert.equal(migrated.crisis.epidemicBurden, 0)
  const actTwoSave = restoreState(JSON.stringify({ ...state, version: 2, endingId: 'western_gamble' }))
  assert.equal(actTwoSave.scenarioId, 'persian_invasion_540')
  assert.equal(actTwoSave.endingId, null)
  assert.equal(actTwoSave.flags.ravennaTaken, true)
  const { spainControl: _spainControl, spainSettlement: _spainSettlement, ...actThreeTheaters } = state.theaters
  const actThreeSave = restoreState(JSON.stringify({ ...state, version: 3, theaters: actThreeTheaters, endingId: 'act_three_survives' }))
  assert.equal(actThreeSave.scenarioId, 'italy_commitment_549')
  assert.equal(actThreeSave.endingId, null)
  assert.equal(actThreeSave.flags.partnershipInstitutionalized, true)
  assert.equal(actThreeSave.theaters.spainControl, 0)
  const actFourSave = restoreState(JSON.stringify({ ...state, version: 4, endingId: 'act_four_integrated' }))
  assert.equal(actFourSave.scenarioId, 'expanded_frontier_555')
  assert.equal(actFourSave.endingId, null)
  assert.equal(actFourSave.flags.pragmaticLocalGovernment, true)
  assert.equal(actFourSave.theaters.balkanSecurity, 46)
  assert.equal(restoreState(JSON.stringify({ ...state, version: 999 })), null)
})

test('the final reign reaches a state-based durable restoration', () => {
  const path = [
    'mobile_imperial_reserve', 'reconstruction_remissions', 'recall_belisarius_559',
    'accept_fifty_year_peace', 'preserve_existing_church_settlement',
    'bind_succession_council', 'transfer_full_imperial_ledger',
  ]
  const base = createInitialState()
  let state = {
    ...base,
    scenarioId: 'expanded_frontier_555',
    theaters: {
      ...base.theaters,
      africaControl: 72,
      africaSettlement: 61,
      italyControl: 70,
      italySettlement: 59,
      spainControl: 22,
      spainSettlement: 18,
    },
    flags: { pragmaticLocalGovernment: true },
  }
  path.forEach((choice) => { state = chooseOption(state, choice) })
  assert.equal(state.endingId, 'restoration_durable')
  assert.equal(state.history.length, 7)
  assert.equal(state.flags.fiftyYearPeaceAccepted, true)
  assert.ok(state.crisis.successionConfidence > base.crisis.successionConfidence)
})

test('final endings distinguish contraction, military dependence, exhaustion, and an overextended map', () => {
  const base = createInitialState()
  const atAudit = (overrides = {}) => ({
    ...base,
    scenarioId: 'imperial_audit_565',
    resources: { ...base.resources, ...(overrides.resources ?? {}) },
    institutions: { ...base.institutions, ...(overrides.institutions ?? {}) },
    factions: { ...base.factions, ...(overrides.factions ?? {}) },
    theaters: { ...base.theaters, ...(overrides.theaters ?? {}) },
    crisis: { ...base.crisis, ...(overrides.crisis ?? {}) },
    appointments: { ...base.appointments, ...(overrides.appointments ?? {}) },
    flags: { ...base.flags, ...(overrides.flags ?? {}) },
  })

  const contraction = chooseOption(atAudit({ theaters: { eastSecurity: 65, balkanSecurity: 64 } }), 'authorize_successor_review')
  assert.equal(contraction.endingId, 'eastern_consolidation_final')

  const generals = chooseOption(atAudit({
    institutions: { military: 86, legal: 40, resilience: 50 },
    factions: { army: 84 },
    appointments: { westernCommand: 'narses' },
  }), 'command_preservation_of_program')
  assert.equal(generals.endingId, 'generals_empire')

  const exhausted = chooseOption(atAudit({ resources: { treasury: 8 }, crisis: { laborCapacity: 24 } }), 'transfer_full_imperial_ledger')
  assert.equal(exhausted.endingId, 'fiscal_demographic_exhaustion')

  const overextended = chooseOption(atAudit({
    institutions: { resilience: 34, fiscal: 34 },
    theaters: { africaControl: 82, italyControl: 86 },
    crisis: { laborCapacity: 48, administrativeContinuity: 55 },
  }), 'command_preservation_of_program')
  assert.equal(overextended.endingId, 'map_without_state')

  const commonwealth = chooseOption(atAudit({
    institutions: { reach: 50, resilience: 70, fiscal: 64 },
    theaters: { africaSettlement: 68, italySettlement: 66 },
    flags: { pragmaticLooseCompact: true },
  }), 'transfer_full_imperial_ledger')
  assert.equal(commonwealth.endingId, 'mediterranean_commonwealth')

  const historicalBurden = chooseOption(atAudit({
    institutions: { resilience: 55, fiscal: 60 },
    theaters: { africaControl: 70, italyControl: 72, africaSettlement: 32, italySettlement: 35 },
    crisis: { laborCapacity: 70 },
  }), 'command_preservation_of_program')
  assert.equal(historicalBurden.endingId, 'historical_achievement_burden')

  const unfinished = chooseOption(atAudit(), 'transfer_full_imperial_ledger')
  assert.equal(unfinished.endingId, 'unfinished_restoration')
})

test('historical divergence is descriptive and bounded', () => {
  let state = createInitialState()
  state = chooseOption(state, 'senatorial_compact')
  assert.ok(historicalDivergence(state) > 0)
  assert.ok(historicalDivergence(state) <= 100)
})
