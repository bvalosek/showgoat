import { basicShowParser } from './basicShowParser';
import moment = require('moment-timezone');
import { Show } from '../types';

test('basicShowParser: Simple show', () => {

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
