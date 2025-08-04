import { Entry } from '../dataobjects/entry.dataobject';
import { estonia } from './countries.data';
import { Rating } from '../dataobjects/rating.dataobject';

export const ee2017: Entry = {
  country: estonia,
  year: 2017,
  place: 32,
  artist: 'Koit Toome & Laura',
  title: 'Verona',
  link: 'https://www.youtube.com/watch?v=ImawXdXIGd8',
  rating: new Rating(8, 6, 8, 9, 10),
};

export const entries2017: Entry[] = [ee2017];
