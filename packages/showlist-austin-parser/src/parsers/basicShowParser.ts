import moment from 'moment-timezone';
import he from 'he';
import parseArtists from './parseArtists';
import { Parser, Show } from '../types';

/** simple / first-level attempt at show parsing */
export const basicShowParser: Parser = (partial, shows, date) => {

  // generic shape

  const basics = partial.match(
    /(?:(.*) with )?(.*) at (?:the)?\s*<a href="([^"]*)"[^>]*>(?:<b>)?([^<]*)(?:<\/b>)?<\/a>/
  );

  if (!basics) {
    return;
  }

  // Entire thing is 1 show

  const show: Show = {
    name: null,
    info: null,
    url: null,
    date: date.toDate(),
    artists: [ ],
    venue: {
      name: null,
      url: null,
      address: null
    }
  };

  // decode all basic info

  const decoded = basics.map(x => x ? he.decode(x) : x);
  const [ , eventName, artists, venueUrl, venueName ] = decoded;

  show.name = eventName || null;
  show.artists = [ ...parseArtists(artists) ];
  show.venue.url = venueUrl || null;
  show.venue.name = venueName || null;

  // If event name looks like a URL, put it as link instead

  {
    const match = eventName ? eventName.match(/<a href="(.*)">(.*)<\/a>/) : null;

    if (match) {
      const [ , eventUrl, eventName ] = match;
      show.name = eventName;
      show.url = eventUrl;
    }
  }

  // Attempt to find venue address

  {
    let venueAddress = partial.match(/span title="([^"]+)"/);

    if (!venueAddress) {
      venueAddress = partial.match(/a> \((.*)\) \[<a href/);
    }

    if (venueAddress) {
      show.venue.address = venueAddress[1];
    }
  }

  // pop out info

  {
    const match = partial.match(/<font color="#666666">\[(.+)\]/);

    if (match) {
      const [ , text ] = match;
      show.info = text.trim();

      // try to extract time
      const time = show.info.split(', ')
        .map(x => x.match(/([0-9:]+(?:am|pm))/))
        .map(x => x ? x[1] : '')
        .filter(x => x);

      if (time.length) {
        const t = moment(time, 'hh:mma');
        show.date = moment(show.date)
           .hour(t.hour())
           .minute(t.minute())
           .toDate();
      }

    }
  }

  shows.push(show);
};