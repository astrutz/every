import { Component, Input } from '@angular/core';
import { Contest } from '../../dataobjects/contest.dataobject';
import { Country } from '../../dataobjects/country.dataobject';
import { Entry } from '../../dataobjects/entry.dataobject';
import { Util } from '../../services/util';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'eurovision-ranking-table',
  templateUrl: 'ranking-table.component.html',
  standalone: true,
  imports: [RouterLink, NgClass],
})
export class RankingTableComponent<T extends Contest | Country | Entry> {
  @Input({ required: true })
  sortedEntities!: T[];

  @Input()
  colorScheme: 'light' | 'dark' = 'light';

  protected getFlag(entry: Entry): string {
    return `${entry.country.code}-${this.colorScheme}`;
  }

  protected readonly Util = Util;
}
