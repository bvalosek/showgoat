import { GetStatusAPIResponse } from "@showgoat/showgoat-common";
import { wrapAPI } from "./util";

export const getStatus = wrapAPI<GetStatusAPIResponse>(async () => {
  return {
    ok: true
  };
});