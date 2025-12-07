import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RankingTableComponent } from '../../components/ranking-table/ranking-table.component';
import { RatedCountry } from '../../dataobjects/country.dataobject';
import { StoreService as EurovisionStoreService } from '../../services/store.service';
import { Rating } from '../../dataobjects/rating.dataobject';
import { NgClass } from '@angular/common';

type TabKey = { key: keyof Rating | undefined; name: string };

@Component({
    selector: 'eurovision-countries',
    templateUrl: 'countries.component.html',
    imports: [BreadcrumbComponent, RankingTableComponent, NgClass]
})
export class CountriesComponent {
  protected storeService = inject(EurovisionStoreService);
  protected tabKeys: TabKey[] = [
    { key: undefined, name: 'Gesamt' },
    { key: 'energy', name: 'Energie' },
    { key: 'staging', name: 'Staging' },
    { key: 'studio', name: 'Studio' },
    { key: 'fun', name: 'Fun' },
    { key: 'vocals', name: 'Vocals' },
  ];

  protected criteria$: WritableSignal<keyof Rating | undefined> = signal(undefined);

  protected countriesRanked$: Signal<RatedCountry[]> = computed(() =>
    this.calculateCountryRanking(this.criteria$()),
  );

  protected calculateCountryRanking(criteria?: keyof Rating): RatedCountry[] {
    return this.storeService.countries
      .map((country) => {
        const entries = this.storeService.getEntriesByCountry(country);
        if (!entries.length) {
          return { ...country, rating: 0 };
        }
        const countryRating =
          entries.reduce(
            (accumulator, currentValue) =>
              accumulator +
              (criteria ? +currentValue.rating[criteria] : currentValue.rating.getTotal()),
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
      this.criteria$.set(criteria as keyof Rating);
    }
  }
}
