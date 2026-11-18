import { Country } from './country.dataobject';
import { Entry } from './entry.dataobject';

export interface Contest {
  _id: string;
  year: string;
  entries: Entry[];
  hostCountry: Country;
  colours: string[];
}

export interface ContestDto {
  year: string;
  hostCountry: string;
  colours: string[];
}
