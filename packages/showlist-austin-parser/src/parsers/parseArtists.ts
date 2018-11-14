import { ArtistWithInfo } from "../types";

/** parse a string of artists */
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
        yield { artist: { name: n } , info };
      }
    } else {
      if (name) {
        yield { artist: { name }, info };
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

