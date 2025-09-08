import { Component, inject, Input } from '@angular/core';
import { Contest } from '../../dataobjects/contest.dataobject';
import { Country } from '../../dataobjects/country.dataobject';
import { Entry } from '../../dataobjects/entry.dataobject';
import { Util } from '../../services/util';
import { RouterLink } from '@angular/router';
import { DOCUMENT, NgClass } from '@angular/common';

@Component({
  selector: 'eurovision-ranking-table',
  templateUrl: 'ranking-table.component.html',
  standalone: true,
  imports: [RouterLink, NgClass],
})
export class RankingTableComponent<T extends Contest | Country | Entry> {
  private document = inject(DOCUMENT);

  @Input({ required: true })
  sortedEntities!: T[];

  @Input()
  colorScheme?: 'light' | 'dark' = undefined;

  @Input()
  showFlag: boolean = true;

  protected getFlag(code: string): string {
    const colorScheme = this.document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    return `${code}-${this.colorScheme ?? colorScheme}`;
  }

  protected readonly Util = Util;
}
