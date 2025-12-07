import { Component, inject, Input } from '@angular/core';
import { Contest } from '../../dataobjects/contest.dataobject';
import { Country } from '../../dataobjects/country.dataobject';
import { Entry } from '../../dataobjects/entry.dataobject';
import { DisplayNameOptions, Util } from '../../services/util';
import { RouterLink } from '@angular/router';
import { DOCUMENT, NgClass } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'eurovision-ranking-table',
    templateUrl: 'ranking-table.component.html',
    imports: [RouterLink, NgClass]
})
export class RankingTableComponent<T extends Contest | Country | Entry> {
  private _themeService = inject(ThemeService);

  @Input({ required: true })
  sortedEntities!: T[];

  @Input()
  colorScheme?: 'light' | 'dark' = undefined;

  @Input()
  showFlag: boolean = true;

  @Input()
  displayNameOptions: DisplayNameOptions | undefined = undefined;

  protected getFlag(code: string): string {
    return `${code}-${this.colorScheme ?? this._themeService.flagBackground}`;
  }

  protected readonly Util = Util;
}
