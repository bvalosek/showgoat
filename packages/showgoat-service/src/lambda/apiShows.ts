import { wrapAPI } from "./util";
import { GetShowsAPIResponse } from "@showgoat/showgoat-common";
import { getTextObject } from "../aws/s3";
import { S3ShowData } from "../types";

export const getShows = wrapAPI<GetShowsAPIResponse>(async () => {

  const file = await getTextObject('scrapes/latest.json');
  const data: S3ShowData = JSON.parse(file);

  return {
    shows: data.shows
  }
});