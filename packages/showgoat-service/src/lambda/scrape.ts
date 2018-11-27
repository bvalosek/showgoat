import fetch from 'node-fetch';
import { parse } from '@showgoat/showlist-austin-parser';
import { S3ShowData } from '../types';
import { putObject } from '../aws/s3';

export const scrape = async () => {
  const resp = await fetch('http://showlistaustin.com');
  const html = await resp.text();
  const shows = parse(html);

  const data: S3ShowData = {
    shows: [ ...shows ]
  };

  const sdata = JSON.stringify(data);

  await Promise.all([
    putObject(`scrapes/${Date.now()}.json`, sdata),
    putObject('scrapes/latest.json', sdata),
  ]);

};