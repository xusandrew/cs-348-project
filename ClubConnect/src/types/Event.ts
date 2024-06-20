import { Club } from './Club'

export type Event = {
  eid: number
  cid: number
  title: string
  description: string | null
  location: string | null
  start_time: Date | null
  end_time: Date | null
  posted_time: Date
  club: Club
}
