import { Country } from './country.dataobject';
import { Entry } from './entry.dataobject';
import { Rating } from './rating.dataobject';

export interface ContestModel {
  year: number;
  entries: Entry[];
  hostCountry: Country;
}

export class Contest implements ContestModel {
  readonly year: number;
  readonly entries: Entry[];
  readonly hostCountry: Country;

  constructor(year: number, entries: Entry[], hostCountry: Country) {
    this.year = year;
    this.entries = entries;
    this.hostCountry = hostCountry;
  }

  public getRating(): Rating {
    return new Rating(
      this.entries.reduce((sum, entry) => sum + entry.rating.energy, 0) / this.entries.length,
      this.entries.reduce((sum, entry) => sum + (entry.rating.staging), 0) / this.entries.length,
      this.entries.reduce((sum, entry) => sum + (entry.rating.studio), 0) / this.entries.length,
      this.entries.reduce((sum, entry) => sum + (entry.rating.fun), 0) / this.entries.length,
      this.entries.reduce((sum, entry) => sum + (entry.rating.vocals), 0) / this.entries.length,
    );
  }
}
