import { Entry } from '../dataobjects/entry.dataobject';
import { estonia } from './countries.data';
import { Rating } from '../dataobjects/rating.dataobject';

const ee2025: Entry = {
  country: estonia,
  year: 2025,
  place: 2,
  artist: 'Tommy Cash',
  title: 'Espresso Macchiato',
  link: 'https://www.youtube.com/watch?v=9b9Z5HSCXOI&pp=ygUSZXNwcmVzc28gbWFjY2hpYXRv',
  rating: new Rating(8, 10, 10, 10, 1),
};

export const entries: Entry[] = [ee2025];

export function entriesByYear(year: number): Entry[] {
  return entries.filter((entry) => entry.year === year);
}
