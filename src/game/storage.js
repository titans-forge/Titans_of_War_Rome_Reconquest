import { restoreState, serializeState } from './simulationEngine.js'

const SAVE_KEY = 'rome-reconquest:act-one:v1'

export function saveCampaign(state) {
  localStorage.setItem(SAVE_KEY, serializeState(state))
}

export function loadCampaign() {
  const raw = localStorage.getItem(SAVE_KEY)
  return raw ? restoreState(raw) : null
}

export function clearCampaign() {
  localStorage.removeItem(SAVE_KEY)
}
