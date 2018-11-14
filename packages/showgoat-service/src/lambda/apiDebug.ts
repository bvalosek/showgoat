import fetch from 'node-fetch';

import { GetLiveParseAPIResponse } from "@showgoat/showgoat-common";
import { parse } from '@showgoat/showlist-austin-parser';
import { wrapAPI } from "./util";

export const getLiveParse = wrapAPI<GetLiveParseAPIResponse>(async () => {

  const resp = await fetch('http://showlistaustin.com');
  const html = await resp.text();
  const shows = parse(html);

  return {
    shows: [ ...shows ]
  };

});