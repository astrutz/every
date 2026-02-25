import { Country } from './country.dataobject';

export interface Entry {
  country: Country;
  year: number;
  place: number;
  artist: string;
  title: string;
  link: string;
  energyRating: number;
  stagingRating: number;
  studioRating: number;
  funRating: number;
  vocalsRating: number;
  totalRating: number;
}
