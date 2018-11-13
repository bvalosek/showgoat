import { wrapAPI } from "./util";
import { GetShowsAPIResponse } from "@showgoat/showgoat-common";

export const getShows = wrapAPI<GetShowsAPIResponse>(async () => {
  return {
    shows: [ ]
  }
});