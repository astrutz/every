import { Country, RatedCountry } from './country.dataobject';
import { Contest } from './contest.dataobject';
import { Entry } from './entry.dataobject';

export type Entity = Country | Contest | Entry | RatedCountry;
