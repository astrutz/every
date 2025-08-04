import { Entry } from '../dataobjects/entry.dataobject';
import { estonia } from './countries.data';
import { Rating } from '../dataobjects/rating.dataobject';

export const ee2023: Entry = {
  country: estonia,
  year: 2023,
  place: 8,
  artist: 'Alika',
  title: 'Bridges',
  link: 'https://www.youtube.com/watch?v=HsbC-OYMA3s',
  rating: new Rating(10, 9, 8, 10, 9),
};

export const entries2023: Entry[] = [ee2023];
