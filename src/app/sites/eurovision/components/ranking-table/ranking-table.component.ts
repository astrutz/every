import { Component, Input } from '@angular/core';
import { Contest } from '../../dataobjects/contest.dataobject';
import { Country } from '../../dataobjects/country.dataobject';
import { Entry } from '../../dataobjects/entry.dataobject';
import { DisplayNameUtil } from '../../services/display-name.util';

@Component({
  selector: 'eurovision-ranking-table',
  templateUrl: 'ranking-table.component.html',
  standalone: true,
})
export class RankingTableComponent<T extends Contest | Country | Entry> {
  @Input({ required: true })
  entities!: T[];

  @Input({ required: true })
  sortedEntities!: T[];

  protected readonly DisplayNameUtil = DisplayNameUtil;
}
