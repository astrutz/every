import { Country, RatedCountry } from '../dataobjects/country.dataobject';
import { Contest } from '../dataobjects/contest.dataobject';
import { Entry } from '../dataobjects/entry.dataobject';
import { Entity } from '../dataobjects/entity.dataobject';

export class Util {
  public static getDisplayName(entity: Entity): string {
    if (Util.isRatedCountry(entity)) {
      return `${entity.name} (${(Math.round(entity.rating * 10) / 10).toLocaleString()})`;
    } else if (Util.isCountry(entity)) {
      return entity.name;
    } else if (Util.isEntry(entity)) {
      return `${entity.artist} - ${entity.title} (${entity.rating.getTotal().toLocaleString()})`;
    } else if (Util.isContest(entity)) {
      return `${entity.hostCountry.name} (${entity.year})`;
    }
    return '';
  }

  public static isCountry(entity: Entity): entity is Country {
    return entity.hasOwnProperty('code') && !entity.hasOwnProperty('rating');
  }

  public static isRatedCountry(entity: Entity): entity is RatedCountry {
    return entity.hasOwnProperty('code') && entity.hasOwnProperty('rating');
  }

  public static isContest(entity: Entity): entity is Contest {
    return entity.hasOwnProperty('year');
  }

  public static isEntry(entity: Entity): entity is Entry {
    return entity.hasOwnProperty('place');
  }
}
