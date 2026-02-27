import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StoreService as EurovisionStoreService } from '../../services/store.service';
import { RankingTableComponent } from '../../components/ranking-table/ranking-table.component';
import { Entry } from '../../dataobjects/entry.dataobject';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

import { ThemeService } from '../../services/theme.service';
import { LoadingComponent } from '../../../../components/loading/loading.component';
import { ContentAreaComponent } from '../../../../components/content-area/content-area.component';

/**
 * Display a single country as a detail view
 */
@Component({
  selector: 'eurovision-country',
  templateUrl: 'country.component.html',
  styleUrl: 'country.component.scss',
  imports: [RankingTableComponent, BreadcrumbComponent, LoadingComponent, ContentAreaComponent],
})
export class CountryComponent implements OnInit {
  #countryCode: string = '';
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #storeService = inject(EurovisionStoreService);
  readonly #themeService = inject(ThemeService);

  ngOnInit() {
    this.#activatedRoute.params.subscribe((params: Params) => {
      this.#countryCode = params['countryCode'] ?? '';
    });
  }

  protected country$ = computed(() => {
    if (!this.#storeService.isLoading$()) {
      return this.#storeService.getCountryByCode(this.#countryCode);
    }
    return undefined;
  });

  protected entries$ = computed<Entry[]>(
    () => this.#storeService.getEntriesByCountry(this.country$()) ?? [],
  );

  protected sortedEntries$ = computed<Entry[]>(() =>
    this.entries$().sort((a, b) => b.totalRating - a.totalRating),
  );

  protected getFlag(code: string): string {
    return `${code}-${this.#themeService.flagBackground}`;
  }

  protected getCrest(code: string): string {
    return `assets/eurovision/crests/${code}.svg`;
  }
}
