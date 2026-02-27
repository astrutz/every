import { Country } from './country.dataobject';
import { Rated } from './rated.dataobject';
import { Contest } from './contest.dataobject';
import { Entry } from './entry.dataobject';

export type Entity = Country | Contest | Entry;

export type RatedEntity = Rated<Entity>;
