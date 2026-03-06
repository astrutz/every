import { Component, inject, Input } from '@angular/core';
import { DisplayNameOptions, Util } from '../../services/util';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { Entity, RatedEntity } from '../../dataobjects/entity.dataobject';
import { TranslationPipe } from '../../pipes/translation.pipe';
import { Country } from '../../dataobjects/country.dataobject';
import { Contest } from '../../dataobjects/contest.dataobject';

/**
 * Universal list component to show ranked entries/countries/contests as a table
 */
@Component({
  selector: 'eurovision-ranking-table',
  templateUrl: 'ranking-table.component.html',
  imports: [RouterLink, NgClass, TranslationPipe],
})
export class RankingTableComponent<T extends Entity | RatedEntity> {
  readonly #themeService = inject(ThemeService);
  readonly #translationPipe = new TranslationPipe();

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

  protected getTranslatedCountry(country: Country) {
    country.name = this.#translationPipe.transform(country.name);
    return country;
  }

  protected getTranslatedContest(contest: Contest) {
    contest.hostCountry.name = this.#translationPipe.transform(contest.hostCountry.name);
    return contest;
  }

  protected readonly Util = Util;
}
