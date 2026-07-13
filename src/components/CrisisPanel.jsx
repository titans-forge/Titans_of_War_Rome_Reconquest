import { BriefcaseMedical, Landmark, Scale, ScrollText, Users } from 'lucide-react'

const measures = [
  ['epidemicBurden', 'Epidemic burden', BriefcaseMedical, true],
  ['burialCapacity', 'Burial capacity', Landmark, false],
  ['laborCapacity', 'Labor capacity', Users, false],
  ['administrativeContinuity', 'Office continuity', ScrollText, false],
  ['successionConfidence', 'Succession confidence', Scale, false],
]

export default function CrisisPanel({ state, caption }) {
  return (
    <figure className="crisis-panel">
      <div className="map-title"><span>Imperial Crisis Register</span><small>Capacity records, not a disease cure</small></div>
      <div className="crisis-measures" aria-label="Current epidemic and administrative condition">
        {measures.map(([key, label, Icon, inverse]) => {
          const value = state.crisis[key]
          return (
            <div className={inverse ? 'inverse' : ''} key={key} aria-label={`${label}: ${value} out of 100`}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
              <strong>{value}</strong>
              <i aria-hidden="true"><b style={{ width: `${value}%` }} /></i>
            </div>
          )
        })}
      </div>
      <p>No choice prevents the outbreak. Orders determine which civic, fiscal, and military institutions survive it.</p>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
