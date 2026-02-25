import { Component, inject, Input } from '@angular/core';
import { DisplayNameOptions, Util } from '../../services/util';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { Entity } from '../../dataobjects/entity.dataobject';

@Component({
  selector: 'eurovision-ranking-table',
  templateUrl: 'ranking-table.component.html',
  imports: [RouterLink, NgClass],
})
export class RankingTableComponent<T extends Entity> {
  readonly #themeService = inject(ThemeService);

  @Input({ required: true })
  sortedEntities!: T[];

  @Input()
  colorScheme?: 'light' | 'dark' = undefined;

  @Input()
  showFlag: boolean = true;

  @Input()
  displayNameOptions: DisplayNameOptions | undefined = undefined;

  protected getFlag(code: string): string {
    return `${code}-${this.colorScheme ?? this.#themeService.flagBackground}`;
  }

  protected readonly Util = Util;
}
