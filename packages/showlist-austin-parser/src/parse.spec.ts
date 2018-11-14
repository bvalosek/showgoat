import { parse } from './parse';
import { readFileSync } from 'fs';

describe('parse', () => {

  it('should be a function', () => {
    expect(typeof parse).toBe('function');
  });

});

// describe('parse - html source a', () => {
//   const html = readFileSync(`${__dirname}/test-html/source-a.html`, 'utf-8');
//   const shows = [ ...parse(html) ];
//   console.log(shows);
// });
