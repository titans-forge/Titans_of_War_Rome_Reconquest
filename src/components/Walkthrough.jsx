import { X } from 'lucide-react'

export default function Walkthrough({ open, onClose }) {
  if (!open) return null
  return (
    <div className="modal-backdrop" onMouseDown={onClose} role="presentation">
      <section className="context-modal walkthrough-modal" role="dialog" aria-modal="true" aria-labelledby="guide-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close walkthrough"><X /></button>
        <p className="modal-label">Campaign Guide</p>
        <h2 id="guide-title">Rule through institutions, not one score</h2>
        <ol>
          <li><strong>Read the brief.</strong> It contains only what the imperial court can reasonably know at that moment.</li>
          <li><strong>Watch Imperial Reach and Provincial Resilience separately.</strong> Concentration and local capacity can rise or fall independently.</li>
          <li><strong>Appointments persist.</strong> The person chosen for law, revenue, or command changes later political conditions.</li>
          <li><strong>Check the ledger.</strong> Some policies deliver their cost several turns after the decision.</li>
          <li><strong>Divergence does not end the game.</strong> The final report records how far your reign departed from the chronology.</li>
        </ol>
      </section>
    </div>
  )
}
