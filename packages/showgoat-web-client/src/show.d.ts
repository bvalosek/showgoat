export interface Artist {
  name: string | null;
}

export interface Artists {
  artist: Artist;
  info: string;
}

export interface Venue {
  address: string | null;
  name: string | null;
  url: string | null;
}

export interface Show {
  artists: Artists[];
  date: Date | null;
  info: string | null;
  name: any;
  url: string | null;
  venue: Venue;
}
