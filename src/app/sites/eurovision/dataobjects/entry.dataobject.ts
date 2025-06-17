import { Country } from './country.dataobject';
import { Rating } from './rating.dataobject';

export interface EntryModel {
  country: Country;
  year: number;
  place: number;
  artist: string;
  title: string;
  link: string;
  rating: Rating;
}

export class Entry implements EntryModel {
  readonly country: Country;
  readonly year: number;
  readonly place: number;
  readonly artist: string;
  readonly title: string;
  readonly link: string;
  readonly rating: Rating;

  constructor(
    country: Country,
    year: number,
    place: number,
    artist: string,
    title: string,
    link: string,
    rating: Rating,
  ) {
    this.country = country;
    this.year = year;
    this.place = place;
    this.artist = artist;
    this.title = title;
    this.link = link;
    this.rating = rating;
  }
}
