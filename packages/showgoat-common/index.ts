import { Show } from '@showgoat/showlist-austin-parser';

export interface GetStatusAPIResponse {
  ok: boolean
}

export interface GetShowsAPIResponse {
  shows: Show[]
}
