export interface JobLocation {
  id: string
  name: string
  address: string
}

export interface FreelanceJob {
  id: string
  title: string
  summary: string
  description: string
  client: string
  pay: string
  duration: string
  workType: string
  location: JobLocation
  responsibilities: string[]
  requirements: string[]
  nextObjective: string
}

export type ChapterOneScreen = 'opening' | 'bfree'
