export interface ChapterSummary {
  id: number
  title: string
  description: string
  focus: string
  status: 'foundation-ready' | 'planned' | 'available'
}
