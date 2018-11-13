export interface Artist {
  name: string
}

export interface Venue {
  name: string | null
  url: string | null
  address: string | null
}

export interface Show {
  name: string | null
  info: string | null
  url: string | null
  date: Date
  artists: Artist[]
  venue: Venue
}