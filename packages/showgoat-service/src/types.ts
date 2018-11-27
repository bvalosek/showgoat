import { Show } from "@showgoat/showlist-austin-parser";

/** shape of the S3 object containing the stored showlist after a scrape */
export interface S3ShowData {
  shows: Show[]
}