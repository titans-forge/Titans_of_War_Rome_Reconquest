import { useCallback, useEffect, useState } from 'react'
import AppHeader from './components/AppHeader.jsx'
import DecisionPanel from './components/DecisionPanel.jsx'
import HistoricalContext from './components/HistoricalContext.jsx'
import ImperialLedger from './components/ImperialLedger.jsx'
import InstitutionRail from './components/InstitutionRail.jsx'
import ResourceRail from './components/ResourceRail.jsx'
import ResultsScreen from './components/ResultsScreen.jsx'
import SoundtrackControl from './components/SoundtrackControl.jsx'
import Walkthrough from './components/Walkthrough.jsx'
import { scenarioById, scenarios } from './data/scenarios.js'
import { chooseOption, resetState } from './game/simulationEngine.js'
import { clearCampaign, loadCampaign, saveCampaign } from './game/storage.js'

export default function App() {
  const [state, setState] = useState(() => loadCampaign() ?? resetState())
  const [contextOpen, setContextOpen] = useState(false)
  const [walkthroughOpen, setWalkthroughOpen] = useState(false)
  const [soundtrackOpen, setSoundtrackOpen] = useState(false)
  const scenario = scenarioById[state.scenarioId]
  const currentAct = scenario?.act ?? Math.max(1, ...state.history.map((entry) => scenarioById[entry.scenarioId]?.act ?? 1))
  const actScenarios = scenarios.filter((item) => (item.act ?? 1) === currentAct)
  const actStage = scenario?.actStage ?? scenario?.stage ?? actScenarios.length

  useEffect(() => saveCampaign(state), [state])
  useEffect(() => {
    setContextOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [state.scenarioId, state.endingId])

  const restart = useCallback(() => {
    clearCampaign()
    setState(resetState())
  }, [])

  const makeChoice = (optionId) => setState((current) => chooseOption(current, optionId))

  return (
    <div className="app-shell">
      <AppHeader
        stage={Math.min(actStage, actScenarios.length)}
        total={actScenarios.length}
        date={scenario?.date ?? `Act ${currentAct} Complete`}
        location={scenario?.location ?? 'Imperial report'}
        actLabel={scenario?.actLabel ?? ({ 1: 'ACT I - THE NEW REIGN', 2: 'ACT II - THE WESTERN GAMBLE', 3: 'ACT III - THE EMPIRE UNDER JUDGMENT', 4: 'ACT IV - THE SECOND RECONQUEST', 5: 'ACT V - WHAT WAS RESTORED?' }[currentAct])}
        musicOpen={soundtrackOpen}
        onContext={() => setContextOpen(true)}
        onMusic={() => setSoundtrackOpen((current) => !current)}
        onWalkthrough={() => setWalkthroughOpen(true)}
        onReset={restart}
      />
      <SoundtrackControl open={soundtrackOpen} scenarioId={state.scenarioId} onClose={() => setSoundtrackOpen(false)} />
      {state.endingId ? (
        <ResultsScreen state={state} onRestart={restart} />
      ) : (
        <>
          <div className="campaign-grid">
            <ResourceRail state={state} />
            <DecisionPanel scenario={scenario} state={state} onChoose={makeChoice} />
            <InstitutionRail state={state} />
          </div>
          <ImperialLedger pending={state.pending} onContext={() => setContextOpen(true)} />
        </>
      )}
      {scenario && <HistoricalContext scenario={scenario} open={contextOpen} onClose={() => setContextOpen(false)} />}
      <Walkthrough open={walkthroughOpen} onClose={() => setWalkthroughOpen(false)} />
    </div>
  )
}
