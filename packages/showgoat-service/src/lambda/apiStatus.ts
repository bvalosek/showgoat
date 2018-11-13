import { StatusAPIResponse } from "@showgoat/showgoat-common";
import { wrapAPI } from "./util";

export const status = wrapAPI<StatusAPIResponse>(async () => {
  return {
    ok: true
  };
});