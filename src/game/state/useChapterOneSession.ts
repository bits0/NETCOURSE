import { useCallback, useEffect, useState } from 'react'
import { chapterOneJob } from '@/game/data/jobs'

const SESSION_KEY = 'netcourse:chapter1:session:v1'

interface ChapterOneSessionState {
  acceptedJobId: string | null
}

function readAcceptedJob(): string | null {
  try {
    const stored = sessionStorage.getItem(SESSION_KEY)
    if (!stored) return null

    const session = JSON.parse(stored) as Partial<ChapterOneSessionState>
    return session.acceptedJobId === chapterOneJob.id ? chapterOneJob.id : null
  } catch {
    return null
  }
}

export function useChapterOneSession() {
  const [acceptedJobId, setAcceptedJobId] = useState<string | null>(readAcceptedJob)

  useEffect(() => {
    try {
      const session: ChapterOneSessionState = { acceptedJobId }
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(session))
    } catch {
      // The in-memory state remains functional if session storage is unavailable.
    }
  }, [acceptedJobId])

  const acceptJob = useCallback((jobId: string) => {
    setAcceptedJobId((currentJobId) => {
      if (jobId !== chapterOneJob.id) return currentJobId
      return currentJobId ?? jobId
    })
  }, [])

  return { acceptedJobId, acceptJob }
}
