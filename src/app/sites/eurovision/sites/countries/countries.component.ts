import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RankingTableComponent } from '../../components/ranking-table/ranking-table.component';
import { RatedCountry } from '../../dataobjects/country.dataobject';
import { StoreService as EurovisionStoreService } from '../../services/store.service';
import { NgClass } from '@angular/common';
import { Entry } from '../../dataobjects/entry.dataobject';

type TabKey = { key: keyof Entry | undefined; name: string };

@Component({
  selector: 'eurovision-countries',
  templateUrl: 'countries.component.html',
  imports: [BreadcrumbComponent, RankingTableComponent, NgClass],
})
export class CountriesComponent {
  protected storeService = inject(EurovisionStoreService);
  protected tabKeys: TabKey[] = [
    { key: undefined, name: $localize`Total` },
    { key: 'energyRating', name: $localize`Energy` },
    { key: 'stagingRating', name: $localize`Staging` },
    { key: 'studioRating', name: $localize`Studio` },
    { key: 'funRating', name: $localize`Fun` },
    { key: 'vocalsRating', name: $localize`Vocals` },
  ];

  protected criteria$: WritableSignal<keyof Entry | undefined> = signal(undefined);

  protected countriesRanked$: Signal<RatedCountry[]> = computed(() =>
    this.calculateCountryRanking(this.criteria$()),
  );

  protected calculateCountryRanking(criteria?: keyof Entry): RatedCountry[] {
    return this.storeService
      .countries$()
      .map((country) => {
        const entries = this.storeService.getEntriesByCountry(country);
        if (!entries.length) {
          return { ...country, rating: 0 };
        }
        const countryRating =
          entries.reduce(
            (accumulator, currentValue) =>
              accumulator + (criteria ? +currentValue[criteria] : currentValue.totalRating),
            0,
          ) / (entries.length ?? 1);
        return { ...country, rating: countryRating };
      })
      .sort((a, b) => b.rating - a.rating);
  }

  setCriteria(event: Event) {
    const criteria = (event.target as HTMLSelectElement).value;
    if (criteria === 'undefined') {
      this.criteria$.set(undefined);
    } else {
      this.criteria$.set(criteria as keyof Entry);
    }
  }
}
