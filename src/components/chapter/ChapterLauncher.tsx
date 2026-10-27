import { ArrowUpRight } from 'lucide-react'
import type { ChapterSummary } from '@/types/chapter'

interface ChapterLauncherProps {
  chapter: ChapterSummary
  onOpen: () => void
}

export default function ChapterLauncher({ chapter, onOpen }: ChapterLauncherProps) {
  const chapterNumber = String(chapter.id).padStart(2, '0')

  return (
    <article className="chapter-launcher" aria-labelledby="chapter-launcher-title">
      <div className="chapter-launcher__meta">
        <span>CHAPTER {chapterNumber}</span>
        <span className="chapter-launcher__status">BRIEFING AVAILABLE</span>
      </div>
      <h2 id="chapter-launcher-title">{chapter.title}</h2>
      <p>{chapter.description}</p>
      <div className="chapter-launcher__footer">
        <div>
          <span className="chapter-launcher__label">LEARNING FOCUS</span>
          <span>{chapter.focus}</span>
        </div>
        <button className="primary-button" type="button" onClick={onOpen}>
          View chapter
          <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}
