import { Building2, Church, Crown, Gavel, Landmark, Scale, ShieldCheck, Swords, Users } from 'lucide-react'

const institutions = [
  ['reach', 'Imperial Reach', Crown],
  ['resilience', 'Provincial Resilience', Landmark],
  ['fiscal', 'Fiscal Durability', Scale],
  ['military', 'Military Cohesion', Swords],
  ['legal', 'Legal Confidence', Gavel],
  ['order', 'Public Order', ShieldCheck],
]

const factions = [
  ['senate', 'Senate', Building2],
  ['blues', 'Blues', Users],
  ['greens', 'Greens', Users],
  ['army', 'Army', Swords],
  ['church', 'Church', Church],
  ['theodora', 'Theodora', Crown],
]

function Measure({ label, value, Icon, className = '' }) {
  return (
    <div className={`measure ${className}`} aria-label={`${label}: ${value} out of 100`}>
      <Icon aria-hidden="true" />
      <span>{label}</span>
      <strong>{value}</strong>
      <div className="measure-bar" aria-hidden="true"><i style={{ width: `${value}%` }} /></div>
    </div>
  )
}

export default function InstitutionRail({ state }) {
  return (
    <aside className="institution-rail">
      <h2>Institutional Balance</h2>
      <div className="signature-measures">
        <Measure label="Imperial Reach" value={state.institutions.reach} Icon={Crown} className="reach" />
        <Measure label="Provincial Resilience" value={state.institutions.resilience} Icon={Landmark} className="resilience" />
      </div>
      <div className="secondary-measures">
        {institutions.slice(2).map(([key, label, Icon]) => <Measure key={key} label={label} value={state.institutions[key]} Icon={Icon} />)}
      </div>
      <h2>Realm & Factions</h2>
      <div className="faction-list">
        {factions.map(([key, label, Icon]) => <Measure key={key} label={label} value={state.factions[key]} Icon={Icon} className={key} />)}
      </div>
    </aside>
  )
}
