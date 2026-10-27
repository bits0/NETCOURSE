export default function NetworkSchematic() {
  return (
    <div className="network-schematic" aria-hidden="true">
      <span className="corner-dot corner-dot--tl" />
      <span className="corner-dot corner-dot--tr" />
      <span className="corner-dot corner-dot--bl" />
      <span className="corner-dot corner-dot--br" />
      <div className="network-schematic__topline">
        <span>TOPOLOGY / CONCEPT VIEW</span>
        <span>STATIC</span>
      </div>
      <svg viewBox="0 0 640 440" fill="none">
        <g className="schematic-grid">
          <path d="M40 80H600M40 160H600M40 240H600M40 320H600M40 400H600" />
          <path d="M80 40V400M180 40V400M280 40V400M380 40V400M480 40V400M580 40V400" />
        </g>
        <g className="schematic-links">
          <path d="M118 220H258M382 220H522" />
          <path d="M320 158V82M320 358V282" />
          <path d="M146 194L270 104M370 336L494 246" className="schematic-links__secondary" />
        </g>
        <g className="schematic-node schematic-node--muted">
          <rect x="58" y="190" width="60" height="60" rx="2" />
          <path d="M73 207H103M73 218H103M73 229H91" />
          <text x="58" y="274">SOURCE</text>
        </g>
        <g className="schematic-node schematic-node--active">
          <rect x="258" y="158" width="124" height="124" rx="3" />
          <rect x="278" y="178" width="84" height="84" rx="1" />
          <circle cx="320" cy="220" r="8" />
          <path d="M320 186V198M320 242V254M286 220H298M342 220H354" />
          <text x="276" y="306">CONNECTION</text>
        </g>
        <g className="schematic-node schematic-node--muted">
          <rect x="522" y="190" width="60" height="60" rx="2" />
          <path d="M537 207H567M537 218H567M537 229H555" />
          <text x="522" y="274">TARGET</text>
        </g>
        <g className="schematic-node schematic-node--peripheral">
          <circle cx="320" cy="70" r="12" />
          <path d="M296 48H270M344 48H370" />
          <text x="288" y="30">LINK</text>
        </g>
        <g className="schematic-node schematic-node--peripheral">
          <circle cx="320" cy="370" r="12" />
          <path d="M296 392H270M344 392H370" />
          <text x="288" y="420">PATH</text>
        </g>
        <g className="schematic-signal">
          <circle cx="132" cy="220" r="4" />
          <circle cx="394" cy="220" r="4" />
        </g>
      </svg>
      <div className="network-schematic__readout">
        <span>PHYSICAL</span>
        <span className="network-schematic__divider" />
        <span>LOGICAL</span>
        <span className="network-schematic__divider" />
        <span>VERIFY</span>
      </div>
    </div>
  )
}
