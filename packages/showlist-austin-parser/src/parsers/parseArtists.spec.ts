import parseArtists from './parseArtists';

const ma = (n = '', i = '') => ({
  artist: { name: n },
  info: i
});

describe('parseArtists', () => {

  it('should parse 1 artist no info', () => {
    const s = 'Artist Name';
    expect([ ma('Artist Name') ]).toEqual([ ...parseArtists(s) ]);
  });

  it('should 1 artist 1 info', () => {
    const s = 'Artist Name (info)';
    expect([ ma('Artist Name', 'info') ]).toEqual([ ...parseArtists(s) ]);
  });

  it('should 1 artist, ugly info', () => {
    const s = 'Artist Name (info, more info)';
    expect([ ma('Artist Name', 'info, more info') ]).toEqual([...parseArtists(s)]);
  });

  it('should parse multi artists', () => {
    const s = 'Artist 1, Artist 2';
    expect([ma('Artist 1'), ma('Artist 2')]).toEqual([...parseArtists(s)]);
  });

  it('should parse multi artists with ugly info', () => {
    const s = 'Artist 1, Artist 2 (some info), Artist 3 (info, more info)';
    expect([
      ma('Artist 1'),
      ma('Artist 2', 'some info'),
      ma('Artist 3', 'info, more info')
    ]).toEqual([...parseArtists(s)]);
  });

  it('should parse multi artists with really ugly info', () => {
    const s = 'Artist 1, Artist 2 (some info (lol)), Artist 3 (info, more info)';
    expect([
      ma('Artist 1'),
      ma('Artist 2', 'some info (lol)'),
      ma('Artist 3', 'info, more info')
    ]).toEqual([...parseArtists(s)]);
  });

  it('should parse multi artists with really ugly info and featuring', () => {
    const s = 'Artist 1, Artist 2 (some info (lol)), Artist 3 (info, more info), featuring Artist 4 and Artist 5';
    expect([
      ma('Artist 1'),
      ma('Artist 2', 'some info (lol)'),
      ma('Artist 3', 'info, more info'),
      ma('Artist 4'),
      ma('Artist 5')
    ]).toEqual([...parseArtists(s)]);
  });

});

