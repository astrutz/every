import { Entry } from '../dataobjects/entry.dataobject';
import { estonia } from './countries.data';
import { Rating } from '../dataobjects/rating.dataobject';

export const ee2019: Entry = {
  country: estonia,
  year: 2019,
  place: 20,
  artist: 'Victor Crone',
  title: 'Storm',
  link: 'https://www.youtube.com/watch?v=PppvSl3_W4E',
  rating: new Rating(5, 2, 2, 3, 4),
};

export const entries2019: Entry[] = [ee2019];
