import { basicShowParser } from './basicShowParser';
import moment = require('moment-timezone');
import { Show } from '../types';

describe('basicShowParser', () => {

  it('should parse a simple show', () => {

    const html = `
      The Tragically Hip at <a href="http://www.emosaustin.com"><b>Emo&apos;s</b></a> (2015 E. Riverside) [<a href="cgi/genpage.cgi?venue=emos" title="list by venue">+</a>] <font color="#666666">[6:30pm doors, 8pm show]</font>
    `;

    const shows: Show[] = [];
    basicShowParser(html, shows, moment());
    const [ show ] = shows;

    const artist = { artist: { name: 'The Tragically Hip' }, info: '' };

    const venue = {
      name: 'Emo\'s',
      address: '2015 E. Riverside',
      url: 'http://www.emosaustin.com'
    };

    expect(show.artists).toEqual([ artist ]);
    expect(show.venue).toEqual(venue);
    expect(show.name).toEqual(null);
    expect(show.url).toEqual(null);
    expect(show.info).toEqual('6:30pm doors, 8pm show');

  });

  it('should parse simple shows', () => {
    const html = `
      Gold Leather, Blood, Cheap Wave at <a href="http://www.hotelvegasaustin.com/" target="_blank"><b>Hotel Vegas</b></a> (1500 E. 6th St.) [<a href="cgi/genpage.cgi?venue=hotelvegas" title="list by venue">+</a>] <font color="#666666">[9pm, <a href="https://www.facebook.com/events/2066107773699232/" target="_blank">fb</a>]</font>
    `;

    const shows: Show[] = [];
    const date = moment('2018-01-01');
    basicShowParser(html, shows, date);

    expect(shows.length).toEqual(1);

    const [ show ] = shows;

    expect(show.artists.length).toEqual(3);
    expect(show.venue.name).toEqual('Hotel Vegas');

  });

});
