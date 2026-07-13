import { Copy, RotateCcw } from 'lucide-react'
import { calculateGrades, getEnding, historicalDivergence, letterGrade } from '../game/simulationEngine.js'
import { scenarioById } from '../data/scenarios.js'

export default function ResultsScreen({ state, onRestart }) {
  const ending = getEnding(state)
  const grades = calculateGrades(state)
  const divergence = historicalDivergence(state)
  const completedAct = Math.max(1, ...state.history.map((entry) => scenarioById[entry.scenarioId]?.act ?? 1))
  const romanAct = ['I', 'II', 'III', 'IV', 'V'][completedAct - 1]

  const copyReport = async () => {
    const gradeText = Object.entries(grades).map(([label, value]) => `${label}: ${letterGrade(value)}`).join(' | ')
    const text = `Titans of War: Rome Reconquest - ${ending.title}. ${gradeText} | Historical divergence: ${divergence}%. #TitansForge`
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const area = document.createElement('textarea')
      area.value = text
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      area.remove()
    }
  }

  return (
    <main className="results-screen">
      <section className="ending-summary">
        <p>ACT {romanAct} - FINAL IMPERIAL REPORT</p>
        <h1>{ending.title}</h1>
        <blockquote>{ending.summary}</blockquote>
        <div className="balance-result">
          <div><span>Imperial Reach</span><strong>{state.institutions.reach}</strong></div>
          <div><span>Provincial Resilience</span><strong>{state.institutions.resilience}</strong></div>
        </div>
        {completedAct >= 2 && (
          <div className="theater-result" aria-label="Final theater settlement">
            <div><span>East security</span><strong>{state.theaters.eastSecurity}</strong></div>
            {completedAct >= 5 && <div><span>Balkan security</span><strong>{state.theaters.balkanSecurity}</strong></div>}
            <div><span>Fleet readiness</span><strong>{state.theaters.fleetReadiness}</strong></div>
            <div><span>Africa</span><strong>{state.theaters.africaControl}/{state.theaters.africaSettlement}</strong><small>control / settlement</small></div>
            <div><span>Italy</span><strong>{state.theaters.italyControl}/{state.theaters.italySettlement}</strong><small>control / settlement</small></div>
            {(completedAct >= 4 || state.theaters.spainControl > 0) && <div><span>Spania</span><strong>{state.theaters.spainControl}/{state.theaters.spainSettlement}</strong><small>control / settlement</small></div>}
          </div>
        )}
        {completedAct >= 3 && (
          <div className="theater-result crisis-result" aria-label="Final crisis condition">
            <div><span>Epidemic burden</span><strong>{state.crisis.epidemicBurden}</strong></div>
            <div><span>Burial capacity</span><strong>{state.crisis.burialCapacity}</strong></div>
            <div><span>Labor capacity</span><strong>{state.crisis.laborCapacity}</strong></div>
            <div><span>Office continuity</span><strong>{state.crisis.administrativeContinuity}</strong></div>
          </div>
        )}
        {completedAct >= 5 && <p className="balance-reading"><strong>Succession:</strong> {successionReading(state)}</p>}
        <p className="balance-reading">{balanceReading(state)}</p>
        <div className="result-actions">
          <button onClick={copyReport}><Copy /> Copy report</button>
          <button onClick={onRestart}><RotateCcw /> Begin again</button>
        </div>
      </section>
      <aside className="reign-report">
        <h2>Act {romanAct} Grades</h2>
        {Object.entries(grades).map(([label, value]) => (
          <div className="grade-row" key={label}><span>{label}</span><strong>{letterGrade(value)}</strong><small>{value}/100</small></div>
        ))}
        <div className="divergence-result"><span>Historical Divergence</span><strong>{divergence}%</strong><p>Recorded as distance from the chronology, not as a reward or punishment.</p></div>
        <details className="decision-chronicle">
          <summary>Open the imperial chronicle</summary>
          <ol>{state.history.map((entry) => <li key={`${entry.turn}:${entry.scenarioId}`}><span>{entry.title}</span><strong>{entry.option}</strong></li>)}</ol>
        </details>
      </aside>
    </main>
  )
}

function successionReading(state) {
  if (state.flags.witnessedSuccessionCouncil) return 'A witnessed council records the transfer, though its authority still depends upon the officers who execute it.'
  if (state.flags.germanusJustinDesignated) return 'Justin, son of Germanus, has a public designation and military standing, but must overcome the palace position of Justin II.'
  if (state.flags.justinIIPrepared) return 'Justin II enters the succession with palace access, the seals, and a prepared ceremonial sequence.'
  return 'The throne passes without a durable succession arrangement recorded by the campaign.'
}

function balanceReading(state) {
  const { reach, resilience } = state.institutions
  if (state.resources.treasury < 18 || state.crisis.laborCapacity < 28) return 'Formal command remains impressive, but depleted revenue or labor leaves too little reserve to reproduce that strength after another major shock.'
  if ((state.theaters.africaControl + state.theaters.italyControl) / 2 >= 62 && (resilience < 40 || state.institutions.fiscal < 38)) return 'The territorial settlement is broader than the civil and fiscal machinery presently able to sustain it.'
  if (reach >= 65 && resilience >= 65) return 'The center can command while provincial institutions retain the capacity to recover and govern.'
  if (reach >= 65 && resilience < 45) return 'The throne commands quickly, but too much routine capacity has been pulled toward Constantinople.'
  if (reach < 45 && resilience >= 65) return 'The provinces remain capable, but imperial orders increasingly depend upon negotiation and local consent.'
  if (reach < 45 && resilience < 45) return 'Neither court nor provinces possess enough dependable capacity to absorb another major crisis.'
  return 'The imperial settlement remains workable but uneven. Western commitments reveal which part of it must be strengthened next.'
}
