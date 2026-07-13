import { ArrowRight, LockKeyhole } from 'lucide-react'
import { optionAvailability } from '../game/simulationEngine.js'
import TheaterMap from './TheaterMap.jsx'
import CrisisPanel from './CrisisPanel.jsx'

export default function DecisionPanel({ scenario, state, onChoose }) {
  return (
    <main className="decision-panel">
      <div className="scenario-heading">
        <p>{scenario.location}</p>
        <h1>{scenario.title}</h1>
        <span>{scenario.role}</span>
      </div>
      {scenario.visual === 'map' ? (
        <TheaterMap state={state} focus={scenario.mapFocus} caption={scenario.caption} />
      ) : scenario.visual === 'crisis' ? (
        <CrisisPanel state={state} caption={scenario.caption} />
      ) : (
        <figure className="scenario-image">
          <img src={scenario.image} alt={scenario.imageAlt} />
          <figcaption>{scenario.caption} <small>Generated historical reconstruction.</small></figcaption>
        </figure>
      )}
      <section className="imperial-brief">
        <h2>{scenario.question}</h2>
        <p>{scenario.brief}</p>
        <ul>{scenario.known.map((fact) => <li key={fact}>{fact}</li>)}</ul>
      </section>
      <div className="choice-list" aria-label="Imperial choices">
        {scenario.options.map((option, index) => {
          const availability = optionAvailability(state, option)
          return (
            <button
              className="choice-button"
              data-option-id={option.id}
              disabled={!availability.available}
              key={option.id}
              onClick={() => onChoose(option.id)}
            >
              <span className="choice-index">{index + 1}</span>
              <span className="choice-copy"><strong>{option.title}</strong><span>{option.argument}</span>{!availability.available && <small><LockKeyhole /> {availability.reason}</small>}</span>
              <ArrowRight aria-hidden="true" />
            </button>
          )
        })}
      </div>
    </main>
  )
}
