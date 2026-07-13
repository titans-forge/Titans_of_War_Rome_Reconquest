import { Hourglass, Landmark, ScrollText } from 'lucide-react'

export default function ImperialLedger({ pending, onContext }) {
  return (
    <section className="imperial-ledger">
      <div className="ledger-title"><ScrollText /><div><strong>Imperial Ledger</strong><span>Promises and delayed consequences</span></div></div>
      <div className="commitment-list">
        {pending.length ? pending.slice(0, 3).map((item) => (
          <div className="commitment" key={item.id}><Hourglass /><div><strong>{item.label}</strong><span>Resolves after turn {item.dueTurn}</span></div></div>
        )) : <p>No delayed commitments are currently recorded.</p>}
      </div>
      <button className="context-command" data-testid="historical-context-toggle" onClick={onContext}><Landmark /> Historical Context</button>
    </section>
  )
}
