import { Entry } from '../dataobjects/entry.dataobject';
import { estonia } from './countries.data';
import { Rating } from '../dataobjects/rating.dataobject';

export const ee2021: Entry = {
  country: estonia,
  year: 2021,
  place: 31,
  artist: 'Uku Sukuviste',
  title: 'The lucky one',
  link: 'https://www.youtube.com/watch?v=mhMZQyv_Fhw',
  rating: new Rating(3, 4, 1, 2, 6),
};

export const entries2021: Entry[] = [ee2021];
