import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import ChapterBriefing from '@/components/chapter/ChapterBriefing'
import ChapterLauncher from '@/components/chapter/ChapterLauncher'
import NetworkSchematic from '@/components/NetworkSchematic'
import { chapterOne } from '@/data/chapters'
import '../App.css'

type ShellView = 'overview' | 'chapter'

export default function Home() {
  const [view, setView] = useState<ShellView>('overview')

  return (
    <AppShell>
      <main className="shell-main">
        {view === 'overview' ? (
          <section className="overview" aria-labelledby="overview-title">
            <div className="overview__copy">
              <p className="system-kicker">NC://BOOT / LEARNING ENVIRONMENT</p>
              <h1 id="overview-title">
                Understand the network.
                <span>Trace the connection.</span>
              </h1>
              <p className="overview__summary">
                A story-driven learning environment for building practical networking
                knowledge—one device, one signal, one decision at a time.
              </p>
              <ChapterLauncher chapter={chapterOne} onOpen={() => setView('chapter')} />
            </div>

            <div className="overview__visual">
              <NetworkSchematic />
              <section className="build-readout" aria-labelledby="build-readout-title">
                <div className="build-readout__heading">
                  <h2 id="build-readout-title">BUILD READOUT</h2>
                  <span>01 / 07</span>
                </div>
                <dl>
                  <div>
                    <dt>Application shell</dt>
                    <dd className="status-ready">Operational</dd>
                  </div>
                  <div>
                    <dt>Design tokens</dt>
                    <dd className="status-ready">Installed</dd>
                  </div>
                  <div>
                    <dt>Gameplay systems</dt>
                    <dd>Later milestone</dd>
                  </div>
                </dl>
              </section>
            </div>
          </section>
        ) : (
          <ChapterBriefing chapter={chapterOne} onBack={() => setView('overview')} />
        )}
      </main>
    </AppShell>
  )
}
