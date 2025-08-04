import { Entry } from '../dataobjects/entry.dataobject';
import { estonia } from './countries.data';
import { Rating } from '../dataobjects/rating.dataobject';

export const ee2018: Entry = {
  country: estonia,
  year: 2018,
  place: 8,
  artist: 'Elina Nechayeva',
  title: 'La Forza',
  link: 'https://www.youtube.com/watch?v=ImawXdXIGd8',
  rating: new Rating(10, 9, 8, 10, 10),
};

export const entries2018: Entry[] = [ee2018];
