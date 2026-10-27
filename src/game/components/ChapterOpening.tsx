import { ArrowLeft, ArrowRight, Bell, MonitorCheck } from 'lucide-react'

interface ChapterOpeningProps {
  onOpenBFree: () => void
  onBack: () => void
}

export default function ChapterOpening({ onOpenBFree, onBack }: ChapterOpeningProps) {
  return (
    <section className="chapter-opening" aria-labelledby="chapter-opening-title">
      <div className="chapter-opening__narrative">
        <p className="system-kicker">NC://CHAPTER_01 / OPENING</p>
        <h1 id="chapter-opening-title">Your next job starts with what you know.</h1>
        <p className="chapter-opening__lead">
          You’re a young freelancer with basic computer skills. You can install software,
          organize files, and handle everyday computer problems—but networks are still
          unfamiliar.
        </p>
        <p>
          Today’s work comes through <strong>BFree.com</strong>, a freelance platform for
          short, practical assignments.
        </p>

        <dl className="freelancer-profile" aria-label="Protagonist profile">
          <div>
            <dt>PROFILE</dt>
            <dd>Young freelancer</dd>
          </div>
          <div>
            <dt>COMPUTER SKILLS</dt>
            <dd>Everyday basics</dd>
          </div>
          <div>
            <dt>NETWORKING</dt>
            <dd>Beginner</dd>
          </div>
        </dl>
      </div>

      <div className="bfree-invite">
        <div className="bfree-invite__brand">
          <span className="bfree-logo">BFree<span>.com</span></span>
          <Bell size={18} strokeWidth={1.7} aria-hidden="true" />
        </div>
        <p className="bfree-invite__label">NEW ASSIGNMENT MATCH</p>
        <MonitorCheck size={30} strokeWidth={1.35} aria-hidden="true" />
        <h2>Office Equipment Inventory</h2>
        <p>On-site · Basic computer skills · Legitimate client</p>
        <button className="primary-button" type="button" onClick={onOpenBFree}>
          Open BFree.com
          <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>

      <button className="text-button chapter-opening__back" type="button" onClick={onBack}>
        <ArrowLeft size={18} strokeWidth={1.8} aria-hidden="true" />
        Return to overview
      </button>
    </section>
  )
}
