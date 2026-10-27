import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import ChapterLauncher from '@/components/chapter/ChapterLauncher'
import NetworkSchematic from '@/components/NetworkSchematic'
import { chapterOne } from '@/data/chapters'
import ChapterOneGame from '@/game/ChapterOneGame'
import '../App.css'

type ShellView = 'overview' | 'game'

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
              <ChapterLauncher chapter={chapterOne} onStart={() => setView('game')} />
            </div>

            <div className="overview__visual">
              <NetworkSchematic />
              <section className="build-readout" aria-labelledby="build-readout-title">
                <div className="build-readout__heading">
                  <h2 id="build-readout-title">BUILD READOUT</h2>
                  <span>02 / 07</span>
                </div>
                <dl>
                  <div>
                    <dt>Application shell</dt>
                    <dd className="status-ready">Operational</dd>
                  </div>
                  <div>
                    <dt>Chapter entry</dt>
                    <dd className="status-ready">Playable opening</dd>
                  </div>
                  <div>
                    <dt>BFree.com</dt>
                    <dd className="status-ready">Job available</dd>
                  </div>
                  <div>
                    <dt>Location exploration</dt>
                    <dd>Later milestone</dd>
                  </div>
                </dl>
              </section>
            </div>
          </section>
        ) : (
          <ChapterOneGame onExit={() => setView('overview')} />
        )}
      </main>
    </AppShell>
  )
}
