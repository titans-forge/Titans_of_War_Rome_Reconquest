import { BriefcaseMedical, Coins, Focus, ScrollText, Shield, Wheat } from 'lucide-react'
import { appointmentLabels, people } from '../data/people.js'

const resources = [
  ['treasury', 'Treasury', Coins],
  ['grain', 'Grain reserve', Wheat],
  ['fieldForces', 'Field forces', Shield],
  ['attention', 'Imperial attention', Focus],
]

export default function ResourceRail({ state }) {
  return (
    <aside className="resource-rail">
      <h2>Imperial Resources</h2>
      <div className="resource-list">
        {resources.map(([key, label, Icon]) => (
          <div className="resource-row" key={key} aria-label={`${label}: ${state.resources[key]} out of 100`}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
            <strong>{state.resources[key]}</strong>
          </div>
        ))}
      </div>
      {state.crisis.epidemicBurden > 0 && (
        <>
          <h2>Crisis Condition</h2>
          <div className="resource-list crisis-rail">
            <div className="resource-row" aria-label={`Epidemic burden: ${state.crisis.epidemicBurden} out of 100`}><BriefcaseMedical /><span>Epidemic burden</span><strong>{state.crisis.epidemicBurden}</strong></div>
            <div className="resource-row" aria-label={`Office continuity: ${state.crisis.administrativeContinuity} out of 100`}><ScrollText /><span>Office continuity</span><strong>{state.crisis.administrativeContinuity}</strong></div>
          </div>
        </>
      )}
      <h2>Offices & Command</h2>
      <div className="appointment-list">
        {Object.entries(appointmentLabels).map(([key, label]) => {
          const personId = state.appointments[key]
          const person = people[personId]
          return (
            <div className="appointment-row" key={key}>
              <span>{label}</span>
              <strong>{person?.name ?? (personId === 'divided' ? 'Divided authority' : personId === 'audited_prefecture' ? 'Audit commissions' : personId === 'senatorial_contracts' ? 'Senatorial contracts' : 'Unassigned')}</strong>
              <small>{appointmentOffice(key, personId, person?.office)}</small>
            </div>
          )
        })}
      </div>
    </aside>
  )
}

function appointmentOffice(key, personId, defaultOffice) {
  if (!personId) return 'Awaiting imperial decision'
  if (key === 'westernCommand' && personId === 'belisarius') return 'Commander of the western expedition'
  if (key === 'westernCommand' && personId === 'narses') return 'Commander in chief in Italy'
  if (key === 'westernCommand' && personId === 'germanus') return 'Dynastic expedition commander'
  if (key === 'easternCommand' && personId === 'belisarius') return 'Magister militum per Orientem'
  return defaultOffice ?? 'Imperial appointment'
}
