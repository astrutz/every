import { Country } from '../dataobjects/country.dataobject';
import { Rated } from '../dataobjects/rated.dataobject';
import { Contest } from '../dataobjects/contest.dataobject';
import { Entry } from '../dataobjects/entry.dataobject';
import { Entity, RatedEntity } from '../dataobjects/entity.dataobject';

export interface DisplayNameOptions {
  hideYear?: boolean;
  hideRating?: boolean;
}

export class Util {
  /**
   * Constructs a display name depending on the context containing a rating
   */
  public static getDisplayName(entity: Entity | RatedEntity, options?: DisplayNameOptions): string {
    if (Util.isRatedCountry(entity)) {
      return `${entity.name} ${options?.hideRating ? '' : ` - ${Util.roundRating(entity.rating)}`}`;
    } else if (Util.isCountry(entity)) {
      return entity.name;
    } else if (Util.isEntry(entity)) {
      return `${entity.artist} - ${entity.title} ${options?.hideRating ? '' : `(${Util.roundRating(entity.totalRating)})`} ${options?.hideYear ? '' : ` - ${entity.year}`}`;
    } else if (Util.isRatedContest(entity)) {
      return `${entity.hostCountry.name} ${entity.year} - ${options?.hideRating ? '' : `${Util.roundRating(entity.rating)}`}`;
    } else if (Util.isContest(entity)) {
      return `${entity.hostCountry.name} (${entity.year})`;
    }
    return '';
  }

  public static isCountry(entity: Entity | RatedEntity): entity is Country {
    return entity.hasOwnProperty('code') && !entity.hasOwnProperty('rating');
  }

  public static isRatedCountry(entity: Entity | RatedEntity): entity is Rated<Country> {
    return entity.hasOwnProperty('code') && entity.hasOwnProperty('rating');
  }

  public static isContest(entity: Entity | RatedEntity): entity is Contest {
    return entity.hasOwnProperty('hostCountry');
  }

  public static isRatedContest(entity: Entity | RatedEntity): entity is Rated<Contest> {
    return entity.hasOwnProperty('hostCountry') && entity.hasOwnProperty('rating');
  }

  public static isEntry(entity: Entity | RatedEntity): entity is Entry {
    return entity.hasOwnProperty('place');
  }

  public static roundRating(rating: number): string {
    return (Math.round(rating * 10) / 10).toLocaleString();
  }
}
