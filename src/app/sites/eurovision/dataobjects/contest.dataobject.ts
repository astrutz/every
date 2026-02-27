import { Country } from './country.dataobject';
import { Entry } from './entry.dataobject';

export interface Contest {
  year: number;
  entries: Entry[];
  hostCountry: Country;
  colours: string[];
}

export type RatedContest = Contest & { rating: number };
