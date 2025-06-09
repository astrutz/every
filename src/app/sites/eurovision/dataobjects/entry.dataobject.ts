import { Country } from './country.dataobject';
import { Rating } from './rating.dataobject';

export interface EntryModel {
  country: Country;
  place: number;
  artist: string;
  title: string;
  link: string;
  rating: Rating;
}

export class Entry implements EntryModel {
  readonly country: Country;
  readonly place: number;
  readonly artist: string;
  readonly title: string;
  readonly link: string;
  readonly rating: Rating;
  
  constructor(country: Country, place: number, artist: string, title: string, link: string, rating: Rating) {
    this.country = country;
    this.place = place;
    this.artist = artist;
    this.title = title;
    this.link = link;
    this.rating = rating;
  }
}
