import { useState } from 'react'
import ChapterOpening from '@/game/components/ChapterOpening'
import BFreePlatform from '@/game/components/BFreePlatform'
import { useChapterOneSession } from '@/game/state/useChapterOneSession'
import type { ChapterOneScreen } from '@/game/types'
import './game.css'

interface ChapterOneGameProps {
  onExit: () => void
}

export default function ChapterOneGame({ onExit }: ChapterOneGameProps) {
  const [screen, setScreen] = useState<ChapterOneScreen>('opening')
  const { acceptedJobId, acceptJob } = useChapterOneSession()

  if (screen === 'bfree') {
    return (
      <BFreePlatform
        acceptedJobId={acceptedJobId}
        onAcceptJob={acceptJob}
        onBack={() => setScreen('opening')}
      />
    )
  }

  return <ChapterOpening onOpenBFree={() => setScreen('bfree')} onBack={onExit} />
}
