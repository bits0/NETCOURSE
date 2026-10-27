import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  Banknote,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock3,
  MapPin,
  ShieldCheck,
} from 'lucide-react'
import { chapterOneJob } from '@/game/data/jobs'

interface BFreePlatformProps {
  acceptedJobId: string | null
  onAcceptJob: (jobId: string) => void
  onBack: () => void
}

export default function BFreePlatform({ acceptedJobId, onAcceptJob, onBack }: BFreePlatformProps) {
  const [showDetails, setShowDetails] = useState(false)
  const acceptanceRef = useRef<HTMLDivElement>(null)
  const wasAccepted = useRef(acceptedJobId === chapterOneJob.id)
  const isAccepted = acceptedJobId === chapterOneJob.id

  useEffect(() => {
    if (isAccepted && !wasAccepted.current) {
      acceptanceRef.current?.focus()
    }
    wasAccepted.current = isAccepted
  }, [isAccepted])

  function handleAccept() {
    onAcceptJob(chapterOneJob.id)
  }

  return (
    <section className="bfree-screen" aria-labelledby="bfree-page-title">
      <div className="bfree-browser">
        <div className="bfree-browser__chrome">
          <span className="bfree-browser__dots" aria-hidden="true">
            <span /><span /><span />
          </span>
          <span className="bfree-browser__address">bfree.com/jobs</span>
          <span className="bfree-browser__session">SESSION ACTIVE</span>
        </div>

        <header className="bfree-header">
          <div>
            <span className="bfree-logo">BFree<span>.com</span></span>
            <p>Independent work. Clear terms.</p>
          </div>
          <span className="bfree-header__workspace">FREELANCER WORKSPACE</span>
        </header>

        <div className="bfree-content">
          <div className="bfree-content__heading">
            <div>
              <p className="system-kicker">JOB MARKETPLACE / LOCAL ASSIGNMENTS</p>
              <h1 id="bfree-page-title">Find your next assignment.</h1>
            </div>
            <span>1 LISTING</span>
          </div>

          {isAccepted && (
            <div
              className="assignment-accepted"
              role="status"
              aria-live="polite"
              tabIndex={-1}
              ref={acceptanceRef}
            >
              <CheckCircle2 size={26} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <h2>Assignment accepted</h2>
                <p><strong>Next objective:</strong> {chapterOneJob.nextObjective}</p>
              </div>
            </div>
          )}

          <article className="job-listing" aria-labelledby="job-title">
            <div className="job-listing__topline">
              <span>JOB {chapterOneJob.id}</span>
              <span className={isAccepted ? 'job-status job-status--accepted' : 'job-status'}>
                {isAccepted ? 'ACCEPTED' : 'AVAILABLE'}
              </span>
            </div>

            <div className="job-listing__summary">
              <div>
                <h2 id="job-title">{chapterOneJob.title}</h2>
                <p>{chapterOneJob.summary}</p>
              </div>
              <span className="job-listing__verified">
                <ShieldCheck size={17} strokeWidth={1.7} aria-hidden="true" />
                Verified client
              </span>
            </div>

            <ul className="job-listing__meta" aria-label="Assignment summary">
              <li><MapPin size={17} aria-hidden="true" />{chapterOneJob.location.name}</li>
              <li><Clock3 size={17} aria-hidden="true" />{chapterOneJob.duration}</li>
              <li><Banknote size={17} aria-hidden="true" />{chapterOneJob.pay}</li>
            </ul>

            <button
              className="secondary-button"
              type="button"
              onClick={() => setShowDetails((visible) => !visible)}
              aria-expanded={showDetails}
              aria-controls="job-details"
            >
              {showDetails ? 'Hide assignment details' : 'Inspect assignment'}
              {showDetails ? <ChevronUp size={18} aria-hidden="true" /> : <ChevronDown size={18} aria-hidden="true" />}
            </button>

            {showDetails && (
              <section className="job-details" id="job-details" aria-labelledby="job-details-title">
                <div className="job-details__intro">
                  <p className="job-details__label">ASSIGNMENT DETAILS</p>
                  <h3 id="job-details-title">A straightforward on-site inventory.</h3>
                  <p>{chapterOneJob.description}</p>
                </div>

                <dl className="job-details__facts">
                  <div><dt>Client</dt><dd>{chapterOneJob.client}</dd></div>
                  <div><dt>Location</dt><dd>{chapterOneJob.location.name}<br />{chapterOneJob.location.address}</dd></div>
                  <div><dt>Work type</dt><dd>{chapterOneJob.workType}</dd></div>
                  <div><dt>Compensation</dt><dd>{chapterOneJob.pay}</dd></div>
                </dl>

                <div className="job-details__columns">
                  <div>
                    <h4>What you’ll do</h4>
                    <ul>{chapterOneJob.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div>
                    <h4>What you’ll need</h4>
                    <ul>{chapterOneJob.requirements.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </div>

                <div className="job-details__acceptance">
                  <p>Accepting adds this assignment to your current session.</p>
                  <button
                    className="primary-button"
                    type="button"
                    onClick={handleAccept}
                    disabled={isAccepted}
                  >
                    {isAccepted ? 'Assignment accepted' : 'Accept assignment'}
                    {isAccepted && <Check size={18} strokeWidth={2} aria-hidden="true" />}
                  </button>
                </div>
              </section>
            )}
          </article>
        </div>
      </div>

      <button className="text-button bfree-screen__back" type="button" onClick={onBack}>
        <ArrowLeft size={18} strokeWidth={1.8} aria-hidden="true" />
        Back to chapter opening
      </button>
    </section>
  )
}
