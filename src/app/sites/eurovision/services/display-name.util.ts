import { Country } from '../dataobjects/country.dataobject';
import { Contest } from '../dataobjects/contest.dataobject';
import { Entry } from '../dataobjects/entry.dataobject';

export class DisplayNameUtil {
  public static getDisplayName(entity: Country | Contest | Entry): string {
    if (DisplayNameUtil._isCountry(entity)) {
      return entity.name;
    } else if (DisplayNameUtil._isEntry(entity)) {
      return `${entity.artist} - ${entity.title} (${entity.rating.getTotal()})`;
    } else if (DisplayNameUtil._isContest(entity)) {
      return `${entity.hostCountry.name} (${entity.year})`;
    }
    return '';
  }

  private static _isCountry(entity: Country | Contest | Entry): entity is Country {
    return entity.hasOwnProperty('code');
  }

  private static _isContest(entity: Country | Contest | Entry): entity is Contest {
    return entity.hasOwnProperty('year');
  }

  private static _isEntry(entity: Country | Contest | Entry): entity is Entry {
    return entity.hasOwnProperty('place');
  }
}
