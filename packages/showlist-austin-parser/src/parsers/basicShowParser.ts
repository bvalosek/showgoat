// import moment from 'moment-timezone';
import he from 'he';
import parseArtists from './parseArtists';
import { Parser, Show } from '../types';

export const basicShowParser: Parser = (partial, shows, date) => {

  // def cant handle lists

  if (/<ul/.test(partial)) {
    return;
  }

  // basic parser cannot handle shit starting with html (multi shows, sxsw,
  // etc) unless its a basic single line show from sxsw with a checkbox

  {
    const reSingleCheck = /<h4><input type="checkbox"[^>]+>/;
    if (reSingleCheck.test(partial)) {
      partial = partial.replace(reSingleCheck, '');
    }
    else if (partial[0] === '<') {
      return;
    }
  }

  // generic shape

  const basics = partial.match(
    /(?:(.*) with )?(.*) at (?:the )?<a href="([^"]*)">(?:<b>)?([^<]*)(?:<\/b>)?<\/a>/);

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

  // // If event name looks like a URL, put it as link instead

  // let matchEventUrl = eventName ? eventName.match(/<a href="(.*)">(.*)<\/a>/) : null;

  // if (matchEventUrl) {
  //   [ , eventUrl, eventName ] = eventUrl;
  // }

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

  // // pop out info
  // let info = partial.match(/<font color="#666666">\[(.+)\]/);

  // if (info) {
  //   const text = info[1];

  //   show.info = text.trim();
  //   show.links = [];

  //   // try to extract time
  //   let time = show.info.split(', ')
  //     .map(x => x.match(/([0-9:]+(?:am|pm))/))
  //     .map(x => x ? x[1] : null)
  //     .filter(x => x);

  //   if (time.length) {
  //     const t = moment(time, 'hh:mma');
  //     show.date
  //       .hour(t.hour())
  //       .minute(t.minute());
  //   }
  // }

  shows.push(show);
};