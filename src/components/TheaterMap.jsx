import { Anchor, Shield, ShipWheel } from 'lucide-react'

const nodes = [
  { id: 'constantinople', label: 'Constantinople', x: 78, y: 30, theater: 'east' },
  { id: 'balkans', label: 'Danube & Thrace', x: 66, y: 22, theater: 'balkans' },
  { id: 'dara', label: 'Eastern frontier', x: 91, y: 43, theater: 'east' },
  { id: 'carthage', label: 'Carthage', x: 36, y: 70, theater: 'africa' },
  { id: 'sicily', label: 'Sicily', x: 50, y: 59, theater: 'italy' },
  { id: 'rome', label: 'Rome', x: 48, y: 37, theater: 'rome' },
  { id: 'ravenna', label: 'Ravenna', x: 53, y: 25, theater: 'ravenna' },
  { id: 'spania', label: 'Spania', x: 17, y: 54, theater: 'spain' },
]

const tone = (value) => value >= 65 ? 'secure' : value >= 35 ? 'contested' : 'exposed'

export default function TheaterMap({ state, focus = 'mediterranean', caption }) {
  const theaters = state.theaters
  const active = (node) => focus === 'mediterranean' || node.theater === focus || (focus === 'italy' && ['italy', 'rome', 'ravenna'].includes(node.theater))
  const showSpain = focus === 'spain' || theaters.spainControl > 0
  const visibleNodes = nodes.filter((node) => node.theater !== 'spain' || showSpain)

  return (
    <figure className="theater-map">
      <div className="map-title"><span>Imperial Theater Schematic</span><small>Strategic routes, not battlefield positions</small></div>
      <svg viewBox="0 0 1000 480" role="img" aria-labelledby="map-title map-description">
        <title id="map-title">Strategic map of the eastern Roman and western Mediterranean theaters</title>
        <desc id="map-description">A schematic map showing Constantinople, the Danube and Thrace, the eastern frontier, Carthage, Sicily, Rome, Ravenna, and, when active, the imperial positions in southern Hispania.</desc>
        <path className="map-land" d="M0 8H1000V119L913 125 867 155 787 146 719 167 651 153 593 180 529 170 468 188 400 163 331 181 267 154 180 161 98 127 0 133Z" />
        <path className="map-land" d="M0 371L92 349 170 362 248 333 316 344 383 314 464 323 539 301 617 318 691 296 764 312 838 286 917 301 1000 272V480H0Z" />
        <path className="map-italy" d="M481 116L511 139 519 177 550 208 541 249 566 273 547 292 515 265 505 222 478 196 461 153Z" />
        <ellipse className="map-island" cx="502" cy="289" rx="39" ry="13" />
        <path className={`map-route ${tone(theaters.fleetReadiness)}`} d="M780 145C687 205 608 240 502 289S382 339 360 340" />
        <path className={`map-route ${tone(theaters.eastSecurity)}`} d="M785 145C850 168 890 186 915 207" />
        <path className={`map-route ${tone(theaters.balkanSecurity)}`} d="M785 145C744 132 700 118 660 106" />
        <path className={`map-route ${tone(theaters.italyControl)}`} d="M502 289C493 235 488 189 480 175" />
        {showSpain && <path className={`map-route ${tone(theaters.fleetReadiness)}`} d="M502 289C405 325 295 303 170 259" />}
        {visibleNodes.map((node) => (
          <g className={`map-node ${active(node) ? 'active' : ''}`} key={node.id} transform={`translate(${node.x * 10} ${node.y * 4.8})`}>
            <circle r="12" />
            <circle r="4" />
            <text x="0" y="-20" textAnchor="middle">{node.label}</text>
          </g>
        ))}
      </svg>
      <div className={`theater-status ${showSpain ? 'has-spain' : ''}`} aria-label="Current theater condition">
        <div><Shield /><span>East security</span><strong>{theaters.eastSecurity}</strong></div>
        <div><Shield /><span>Balkan security</span><strong>{theaters.balkanSecurity}</strong></div>
        <div><ShipWheel /><span>Fleet readiness</span><strong>{theaters.fleetReadiness}</strong></div>
        <div><Anchor /><span>Africa</span><strong>{theaters.africaControl}/{theaters.africaSettlement}</strong><small>control / settlement</small></div>
        <div><Anchor /><span>Italy</span><strong>{theaters.italyControl}/{theaters.italySettlement}</strong><small>control / settlement</small></div>
        {showSpain && <div><Anchor /><span>Spania</span><strong>{theaters.spainControl}/{theaters.spainSettlement}</strong><small>control / settlement</small></div>}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
