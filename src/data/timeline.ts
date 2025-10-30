export interface MonthlyEvent {
  month: number
  events: string[] | null
}

const TIMELINE: MonthlyEvent[] = [
  {
    month: 1,
    events: ['KWEB 해커톤']
  },
  {
    month: 2,
    events: null
  },
  {
    month: 3,
    events: ['신입부원 모집', '개강총회', 'MT']
  },
  {
    month: 4,
    events: null
  },
  {
    month: 5,
    events: null
  },
  {
    month: 6,
    events: ['준회원 승급시험', '종강총회']
  },
  {
    month: 7,
    events: null
  },
  {
    month: 8,
    events: null
  },
  {
    month: 9,
    events: ['신입부원 모집', '개강총회']
  },
  {
    month: 10,
    events: null
  },
  {
    month: 11,
    events: ['화합의 날']
  },
  {
    month: 12,
    events: ['준회원 승급시험', '종강총회']
  }
]

export default TIMELINE
