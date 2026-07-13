import { BookOpen, CircleHelp, Music2, RotateCcw } from 'lucide-react'

export default function AppHeader({ stage, total, date, location, actLabel, musicOpen, onContext, onMusic, onWalkthrough, onReset }) {
  return (
    <header className="app-header">
      <div className="brand-block">
        <strong>TITANS OF WAR</strong>
        <span>ROME RECONQUEST</span>
      </div>
      <div className="campaign-progress" aria-label={`${actLabel} progress: stage ${stage} of ${total}`}>
        <span>{actLabel}</span>
        <div className="stage-dots" aria-hidden="true">
          {Array.from({ length: total }, (_, index) => <i className={index < stage ? 'complete' : ''} key={index} />)}
        </div>
      </div>
      <div className="date-block"><strong>{date}</strong><span>{location}</span></div>
      <nav className="header-actions" aria-label="Campaign controls">
        <button onClick={onMusic} title="Soundtrack" aria-expanded={musicOpen}><Music2 /><span>Music</span></button>
        <button onClick={onContext} title="Historical context"><BookOpen /><span>Context</span></button>
        <button onClick={onWalkthrough} title="Walkthrough"><CircleHelp /><span>Guide</span></button>
        <button onClick={onReset} title="Start again"><RotateCcw /><span>Reset</span></button>
      </nav>
    </header>
  )
}
