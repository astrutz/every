import { Country } from './country.dataobject';
import { Entry } from './entry.dataobject';

export interface Contest {
  _id: string;
  year: number;
  entries: Entry[];
  hostCountry: Country;
  colours: string[];
}

export interface ContestDto {
  year: number;
  hostCountry: string;
  colours: string[];
}
