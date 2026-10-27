import { ArrowLeft } from 'lucide-react'
import type { ChapterSummary } from '@/types/chapter'

interface ChapterBriefingProps {
  chapter: ChapterSummary
  onBack: () => void
}

const plannedSequence = [
  ['01', 'Physical exploration', 'Locate devices and inspect their physical state.'],
  ['02', 'Logical visualization', 'Distinguish the physical workspace from the network view.'],
  ['03', 'Guided verification', 'Use structured checks to confirm device communication.'],
]

export default function ChapterBriefing({ chapter, onBack }: ChapterBriefingProps) {
  return (
    <section className="chapter-briefing" aria-labelledby="chapter-briefing-title">
      <div className="chapter-briefing__heading">
        <p className="system-kicker">NC://CHAPTER_01 / BRIEFING</p>
        <h1 id="chapter-briefing-title">{chapter.title}</h1>
        <p>{chapter.description}</p>
      </div>

      <div className="chapter-briefing__grid">
        <div className="learning-sequence">
          <h2>PLANNED LEARNING SEQUENCE</h2>
          <ol>
            {plannedSequence.map(([number, title, description]) => (
              <li key={number}>
                <span className="learning-sequence__number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="milestone-note" aria-labelledby="milestone-note-title">
          <span className="milestone-note__code">CURRENT MILESTONE</span>
          <h2 id="milestone-note-title">Project foundation</h2>
          <p>
            This entry point is connected to the application shell. Exploration,
            troubleshooting, story scenes, and assessment remain outside Step 1.
          </p>
          <span className="milestone-note__state">
            <span aria-hidden="true" /> Shell operational
          </span>
        </aside>
      </div>

      <button className="text-button" type="button" onClick={onBack}>
        <ArrowLeft size={18} strokeWidth={1.8} aria-hidden="true" />
        Return to overview
      </button>
    </section>
  )
}
