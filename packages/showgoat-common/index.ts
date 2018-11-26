import { Show, PartialList } from '@showgoat/showlist-austin-parser';

export interface GetStatusAPIResponse {
  ok: boolean
}

export interface GetShowsAPIResponse {
  shows: Show[]
}

export interface GetLiveParseAPIResponse {
  shows: Show[]
}

export interface GetLivePartialsAPIResponse {
  partials: PartialList[]
}