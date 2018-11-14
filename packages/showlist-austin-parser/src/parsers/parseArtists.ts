import { Artist } from "../types";

interface ArtistWithInfo {
  artist: Artist
  info: string
}

/*

 Iterable that will parse a string of artists like:

 A, B (info), C (info), D (some, info)

 Needed because the above nested format isn't parsable by regex

*/
export default function* parseArtists(sArtists: string): Iterable<ArtistWithInfo>
{
  let pCount = 0;
  let name = '';
  let info = '';

  const makeArtist = function* () {
    name = name.trim();

    let m;
    if ((m = name.match(/featuring (.*)/))) {
      let names = m[1].split(' and ');
      for (let n of names) {
        const artist: Artist = { name: n };
        yield { artist, info };
      }
    } else {
      if (name) {
        const artist: Artist = { name };
        yield { artist, info };
      }
    }

    info = name = '';
  };

  for (const s of sArtists) {
    switch (s) {
      default:
        if (!pCount) {
          name += s;
        } else {
          info += s;
        }
        break;
      case ',':
        if (!pCount) {
          yield* makeArtist();
        } else {
          info += s;
        }
        break;
      case '(':
        pCount++;
        if (pCount > 1) {
          info += s;
        }
        break;
      case ')':
        pCount--;
        if (pCount > 0) {
          info += s;
        }
        break;
    }
  }

  yield* makeArtist();
};

