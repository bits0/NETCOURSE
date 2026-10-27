import type { ReactNode } from 'react'
import BrandMark from '@/components/BrandMark'

interface AppShellProps {
  children: ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <header className="shell-header">
        <div className="shell-header__inner">
          <div className="brand" aria-label="NETCOURSE field learning system">
            <BrandMark className="brand__mark" />
            <span className="brand__name">NETCOURSE</span>
            <span className="brand__edition">FIELD LEARNING SYSTEM</span>
          </div>
          <div className="build-state">
            <span className="build-state__dot" aria-hidden="true" />
            CHAPTER 01 / OPENING
          </div>
        </div>
      </header>

      <div className="shell-body">
        <aside className="chapter-rail" aria-label="Current chapter index">
          <span className="chapter-rail__label">CH.</span>
          <span className="chapter-rail__current" aria-current="step">01</span>
          <span className="chapter-rail__line" aria-hidden="true" />
          <span className="chapter-rail__total">10</span>
        </aside>
        <div className="shell-content">{children}</div>
      </div>

      <footer className="shell-footer">
        <span>STEP 02 / GAME ENTRY &amp; BFREE.COM</span>
        <span>REACT · TYPESCRIPT · VITE</span>
      </footer>
    </div>
  )
}
