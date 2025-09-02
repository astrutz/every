import { Country } from '../dataobjects/country.dataobject';
import { Contest } from '../dataobjects/contest.dataobject';
import { Entry } from '../dataobjects/entry.dataobject';

export class Util {
  public static getDisplayName(entity: Country | Contest | Entry): string {
    if (Util.isCountry(entity)) {
      return entity.name;
    } else if (Util.isEntry(entity)) {
      return `${entity.artist} - ${entity.title} (${entity.rating.getTotal()})`;
    } else if (Util.isContest(entity)) {
      return `${entity.hostCountry.name} (${entity.year})`;
    }
    return '';
  }

  public static isCountry(entity: Country | Contest | Entry): entity is Country {
    return entity.hasOwnProperty('code');
  }

  public static isContest(entity: Country | Contest | Entry): entity is Contest {
    return entity.hasOwnProperty('year');
  }

  public static isEntry(entity: Country | Contest | Entry): entity is Entry {
    return entity.hasOwnProperty('place');
  }
}
