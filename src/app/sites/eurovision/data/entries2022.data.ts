import { Entry } from '../dataobjects/entry.dataobject';
import { estonia } from './countries.data';
import { Rating } from '../dataobjects/rating.dataobject';

export const ee2022: Entry = {
  country: estonia,
  year: 2022,
  place: 13,
  artist: 'Stefan',
  title: 'Hope',
  link: 'https://www.youtube.com/watch?v=GdTpQmMem8U',
  rating: new Rating(6, 3, 5, 6, 6),
};

export const entries2022: Entry[] = [ee2022];
