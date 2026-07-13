import { endings, scenarioById } from '../data/scenarios.js'
import { createInitialState, SAVE_VERSION } from './initialState.js'

const GROUPS = ['resources', 'institutions', 'factions', 'theaters', 'crisis']
const clamp = (value) => Math.max(0, Math.min(100, Math.round(value)))

export function applyEffects(state, effects = {}) {
  const next = { ...state }
  GROUPS.forEach((group) => {
    if (!effects[group]) return
    next[group] = { ...state[group] }
    Object.entries(effects[group]).forEach(([key, delta]) => {
      next[group][key] = clamp((state[group][key] ?? 0) + delta)
    })
  })
  return next
}

export function getPathValue(state, path) {
  return path.split('.').reduce((value, key) => value?.[key], state)
}

export function optionAvailability(state, option) {
  if (!option.requirement) return { available: true, reason: '' }
  const value = getPathValue(state, option.requirement.path)
  return {
    available: value >= option.requirement.minimum,
    reason: option.requirement.label,
  }
}

function applyDueCommitments(state, nextTurn) {
  const due = state.pending.filter((commitment) => commitment.dueTurn <= nextTurn)
  const pending = state.pending.filter((commitment) => commitment.dueTurn > nextTurn)
  let next = { ...state, pending }
  due.forEach((commitment) => {
    next = applyEffects(next, commitment.effects)
  })
  return { state: next, resolved: due }
}

function determineEnding(state, scenario, option) {
  if (scenario.id === 'imperial_audit_565') return determineFinalReignEnding(state)
  if (option.ending) return option.ending
  if (scenario.ending) return scenario.ending

  if (option.id === 'converging_assault' && state.institutions.military < 52) return 'deposed'
  if (option.id === 'conceal_imperial_illness' && state.crisis.successionConfidence < 35) return 'succession_crisis'
  return null
}

function determineFinalReignEnding(state) {
  const { treasury } = state.resources
  const { reach, resilience, fiscal, military, legal } = state.institutions
  const { army } = state.factions
  const { eastSecurity, balkanSecurity, africaControl, africaSettlement, italyControl, italySettlement } = state.theaters
  const { laborCapacity, administrativeContinuity, successionConfidence } = state.crisis
  const westernControl = (africaControl + italyControl) / 2
  const westernSettlement = (africaSettlement + italySettlement) / 2

  if (treasury < 18 || laborCapacity < 28 || administrativeContinuity < 30 || (fiscal < 30 && resilience < 38)) {
    return 'fiscal_demographic_exhaustion'
  }
  if (westernControl >= 62 && (resilience < 40 || fiscal < 38 || laborCapacity < 42)) {
    return 'map_without_state'
  }
  if (military >= 75 && army >= 70 && ['belisarius', 'narses'].includes(state.appointments.westernCommand) && legal < 58 && resilience < 58) {
    return 'generals_empire'
  }
  if (state.flags.finalAuditContracted && eastSecurity >= 58 && balkanSecurity >= 52) {
    return 'eastern_consolidation_final'
  }
  if ((state.flags.pragmaticLooseCompact || state.flags.districtRecoveryCompacts || state.flags.layeredFrontierCommands)
    && resilience >= 62 && westernSettlement >= 48 && reach <= 68) {
    return 'mediterranean_commonwealth'
  }
  if (resilience >= 62 && fiscal >= 52 && administrativeContinuity >= 55 && successionConfidence >= 55 && westernSettlement >= 48) {
    return 'restoration_durable'
  }
  if (state.flags.finalAuditProgram || westernControl >= 58 || state.flags.fiftyYearPeaceAccepted) {
    return 'historical_achievement_burden'
  }
  return 'unfinished_restoration'
}

export function chooseOption(state, optionId) {
  const scenario = scenarioById[state.scenarioId]
  if (!scenario || state.endingId) return state
  const option = scenario.options.find((candidate) => candidate.id === optionId)
  if (!option || !optionAvailability(state, option).available) return state

  let next = applyEffects(state, option.effects)
  next = {
    ...next,
    appointments: { ...state.appointments, ...(option.appointment ?? {}) },
    flags: { ...state.flags, ...(option.flags ?? {}) },
  }

  const scheduled = (option.delayed ?? []).map((commitment, index) => ({
    id: `${scenario.id}:${option.id}:${state.turn}:${index}`,
    label: commitment.label,
    dueTurn: state.turn + commitment.after,
    effects: commitment.effects,
  }))

  next.pending = [...state.pending, ...scheduled]
  const nextTurn = state.turn + 1
  const dueResult = applyDueCommitments(next, nextTurn)
  next = dueResult.state

  const historyEntry = {
    turn: state.turn,
    scenarioId: scenario.id,
    title: scenario.title,
    question: scenario.question,
    optionId: option.id,
    option: option.title,
    divergence: option.divergence ?? 0,
    resolvedCommitments: dueResult.resolved.map((item) => item.label),
  }

  const endingId = determineEnding(next, scenario, option)
  const nextScenarioId = option.route ?? scenario.next ?? null

  return {
    ...next,
    turn: nextTurn,
    scenarioId: endingId ? state.scenarioId : nextScenarioId,
    endingId,
    history: [...state.history, historyEntry],
  }
}

export function calculateGrades(state) {
  const average = (...values) => Math.round(values.reduce((sum, value) => sum + value, 0) / values.length)
  return {
    'Imperial Statecraft': average(state.institutions.reach, state.institutions.order, state.resources.attention),
    'Military Command': average(state.institutions.military, state.factions.army, state.resources.fieldForces),
    'Provincial Balance': average(state.institutions.resilience, state.institutions.fiscal),
    'Fiscal Stewardship': average(state.resources.treasury, state.institutions.fiscal, state.crisis?.laborCapacity ?? 80),
    'Coalition Management': average(state.factions.senate, state.factions.blues, state.factions.greens, state.factions.theodora),
    'Law and Administration': average(state.institutions.legal, state.resources.attention),
    'Theater Sustainability': average(
      state.theaters?.eastSecurity ?? 50,
      Math.max(state.theaters?.balkanSecurity ?? 0, 50),
      state.theaters?.fleetReadiness ?? 50,
      Math.max(state.theaters?.africaControl ?? 0, 50),
      Math.max(state.theaters?.italyControl ?? 0, 50),
      Math.max(state.theaters?.spainControl ?? 0, 50),
    ),
    'Crisis Governance': average(
      100 - (state.crisis?.epidemicBurden ?? 0),
      state.crisis?.burialCapacity ?? 80,
      state.crisis?.laborCapacity ?? 80,
      state.crisis?.administrativeContinuity ?? 80,
      state.crisis?.successionConfidence ?? 68,
    ),
  }
}

export function letterGrade(value) {
  if (value >= 85) return 'A'
  if (value >= 72) return 'B'
  if (value >= 58) return 'C'
  if (value >= 42) return 'D'
  return 'F'
}

export function historicalDivergence(state) {
  if (!state.history.length) return 0
  return Math.min(100, Math.round(state.history.reduce((sum, item) => sum + item.divergence, 0) / state.history.length * 5))
}

export function getEnding(state) {
  return endings[state.endingId] ?? endings.act_complete
}

export function serializeState(state) {
  return JSON.stringify(state)
}

export function restoreState(raw) {
  try {
    let parsed = JSON.parse(raw)
    if (parsed.version === 1) {
      parsed = {
        ...parsed,
        version: 2,
        theaters: createInitialState().theaters,
        scenarioId: parsed.endingId === 'act_complete' ? 'eternal_peace' : parsed.scenarioId,
        endingId: parsed.endingId === 'act_complete' ? null : parsed.endingId,
      }
    }
    if (parsed.version === 2) {
      const actTwoFlags = {
        western_gamble: { ravennaTaken: true },
        partition_settlement: { italianPartition: true },
        two_courts: { westernAugustus: true },
        eastern_consolidation: { italyDeclined: true },
      }[parsed.endingId]
      parsed = {
        ...parsed,
        version: 3,
        crisis: createInitialState().crisis,
        appointments: { ...createInitialState().appointments, ...parsed.appointments },
        flags: { ...parsed.flags, ...(actTwoFlags ?? {}) },
        scenarioId: actTwoFlags ? 'persian_invasion_540' : parsed.scenarioId,
        endingId: actTwoFlags ? null : parsed.endingId,
      }
    }
    if (parsed.version === 3) {
      const actThreeFlags = {
        act_three_survives: { partnershipInstitutionalized: true },
        act_three_centralized: { partnershipCentralized: true },
        act_three_isolated: { partnershipDismantled: true },
      }[parsed.endingId]
      const legacyTheaters = parsed.theaters ?? {}
      parsed = {
        ...parsed,
        version: 4,
        theaters: {
          ...createInitialState().theaters,
          ...legacyTheaters,
          spainControl: legacyTheaters.spainControl ?? 0,
          spainSettlement: legacyTheaters.spainSettlement ?? 0,
        },
        flags: { ...parsed.flags, ...(actThreeFlags ?? {}) },
        scenarioId: actThreeFlags ? 'italy_commitment_549' : parsed.scenarioId,
        endingId: actThreeFlags ? null : parsed.endingId,
      }
    }
    if (parsed.version === 4) {
      const actFourFlags = {
        act_four_integrated: { pragmaticLocalGovernment: true },
        act_four_military_recovery: { pragmaticDirectRule: true },
        act_four_loose_settlement: { pragmaticLooseCompact: true },
      }[parsed.endingId]
      parsed = {
        ...parsed,
        version: SAVE_VERSION,
        theaters: {
          ...createInitialState().theaters,
          ...parsed.theaters,
          balkanSecurity: parsed.theaters?.balkanSecurity ?? createInitialState().theaters.balkanSecurity,
        },
        flags: { ...parsed.flags, ...(actFourFlags ?? {}) },
        scenarioId: actFourFlags ? 'expanded_frontier_555' : parsed.scenarioId,
        endingId: actFourFlags ? null : parsed.endingId,
      }
    }
    if (parsed.version !== SAVE_VERSION || (!parsed.endingId && !scenarioById[parsed.scenarioId])) return null
    return parsed
  } catch {
    return null
  }
}

export function resetState() {
  return createInitialState()
}
