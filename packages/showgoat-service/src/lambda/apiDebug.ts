import fetch from 'node-fetch';

import { GetLiveParseAPIResponse, GetLivePartialsAPIResponse } from "@showgoat/showgoat-common";
import { parse, getPartials } from '@showgoat/showlist-austin-parser';
import { wrapAPI } from "./util";

export const getLiveParse = wrapAPI<GetLiveParseAPIResponse>(async () => {

  const resp = await fetch('http://showlistaustin.com');
  const html = await resp.text();
  const shows = parse(html);

  return {
    shows: [ ...shows ]
  };

});

export const getLivePartials = wrapAPI<GetLivePartialsAPIResponse>(async () => {

  const resp = await fetch('http://showlistaustin.com');
  const html = await resp.text();

  const partials = getPartials(html);

  return {
    partials: [ ...partials ]
  };

});