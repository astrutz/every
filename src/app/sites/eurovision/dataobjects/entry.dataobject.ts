import { Country } from './country.dataobject';
import { Contest } from './contest.dataobject';

export interface Entry {
  _id: string;
  country: Country;
  contest: Contest;
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

export interface EntryDto {
  country: string;
  contest: string;
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
}
