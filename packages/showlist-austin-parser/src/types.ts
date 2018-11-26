import { Moment } from "moment";

export interface Artist {
  name: string
}

export interface Venue {
  name: string | null
  url: string | null
  address: string | null
}

export interface ArtistWithInfo {
  artist: Artist
  info: string
}

export interface Show {
  name: string | null
  info: string | null
  url: string | null
  date: Date
  artists: ArtistWithInfo[]
  venue: Venue
}

export interface Parser {
  (partialHtml: string, out__shows: Show[], date: Moment): void
}

export interface PartialList {
  date: Moment
  partials: string[]
}
