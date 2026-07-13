import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function HistoricalContext({ scenario, open, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    const close = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="modal-backdrop" onMouseDown={onClose} role="presentation">
      <section className="context-modal" role="dialog" aria-modal="true" aria-labelledby="context-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close historical context"><X /></button>
        <p className="modal-label">Historical Context</p>
        <h2 id="context-title">{scenario.title}</h2>
        <p>{scenario.context}</p>
        <h3>Where the evidence is complicated</h3>
        <p>{scenario.complexity}</p>
        <h3>Sources</h3>
        <ul>{scenario.sources.map((source) => <li key={source}>{source}</li>)}</ul>
      </section>
    </div>
  )
}
