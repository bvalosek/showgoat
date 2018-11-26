import { Show, Parser, PartialList } from './types';
import cheerio from 'cheerio';
import moment, { Moment } from 'moment-timezone';
import { basicShowParser } from './parsers/basicShowParser';

const parsers: Parser[] = [
  basicShowParser
];

function dateFromHeader($header: Cheerio): moment.Moment
{
  const match = $header.text().match(/(\S+) ?(\d+)[,\.] ?(\d+)/);

  if (!match) {
    throw new Error(`Unable to parse date header: ${$header.html()}`);
  }

  const [ , month, date, year ] = match;
  const m = moment.tz(`${month} ${date} ${year}`, 'MMMM DD YYYY', 'America/Chicago');
  return m;
}

function* iter($: CheerioStatic, $sel: Cheerio): Iterable<Cheerio>
{
  for (const el of $sel.toArray()) {
    yield $(el);
  }
}

function htmlPartialsFromHeader($header: Cheerio): string[]
{
  const $contents = $header.next('table').find('tr td');

  let html = $contents.html();

  if (!html) {

    // might be a sxsw show and uses a form instead

    const $contents = $header.next('form');
    html = $contents.html();

    // still no..

    if (!html) {
      throw new Error('Unable to find any partials under header');
    }
  }

  return html
    .split('<hr style="color:#cccccc;">')
    .filter(s => s && s !== '\n');
}

/**
 * Extract all HTML partials (chunks of HTML corresponding to a single show on
 * a specific date) from source HTML
 */
export function* getPartials(html: string): Iterable<PartialList>
{
  const $ = cheerio.load(html);

  const $dateHeaders = $('h4[style="color:maroon;"]');

  for (const $header of iter($, $dateHeaders)) {
    const date = dateFromHeader($header);
    const partials = htmlPartialsFromHeader($header);
    yield { date, partials };
  }
}

/**
 * Extract all shows from source HTML
 */
export function* parse(html: string): Iterable<Show>
{
  for (const { date, partials } of getPartials(html)) {

    let showCount = 0;

    for (const partial of partials) {
      const shows: Show[] = [ ];

      for (const parser of parsers) {
        parser(partial, shows, date);
      }

      yield* shows;
      showCount += shows.length;
    }

    if (showCount != partials.length) {
      console.warn(`WARNING: scraped ${date.toString()}, only found ${showCount} / ${partials.length} shows`);
    }
  }
}