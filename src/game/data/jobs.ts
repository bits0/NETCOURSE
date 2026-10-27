import type { FreelanceJob } from '@/game/types'

export const chapterOneJob: FreelanceJob = {
  id: 'BF-1042',
  title: 'Office Equipment Inventory',
  summary: 'Inventory computers and networking equipment at an office building.',
  description:
    'Aster Facilities needs a straightforward equipment count before updating its records. This legitimate on-site assignment is limited to identifying, counting, and recording equipment.',
  client: 'Aster Facilities',
  pay: '$180 fixed',
  duration: '2–3 hours',
  workType: 'On-site',
  location: {
    id: 'aster-office-building',
    name: 'Aster Office Building',
    address: 'Floor 2, Bellwether',
  },
  responsibilities: [
    'Check in at reception and review the inventory sheet.',
    'Record computers, switches, equipment labels, and quantities.',
    'Note visible damage or missing items without attempting repairs.',
  ],
  requirements: [
    'Basic computer literacy',
    'Attention to detail',
    'No networking experience required',
  ],
  nextObjective: 'Go to Aster Office Building and check in at reception.',
}
