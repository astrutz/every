import { Component, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RankingTableComponent } from '../../components/ranking-table/ranking-table.component';
import { Country, RatedCountry } from '../../dataobjects/country.dataobject';
import { ActivatedRoute } from '@angular/router';
import { StoreService as EurovisionStoreService } from '../../services/store.service';

@Component({
  selector: 'eurovision-countries',
  templateUrl: 'countries.component.html',
  standalone: true,
  imports: [BreadcrumbComponent, RankingTableComponent],
})
export class CountriesComponent {
  protected countries!: Country[];
  protected countriesRanked: RatedCountry[];
  protected storeService = inject(EurovisionStoreService);

  constructor() {
    this.countries = this.storeService.countries;
    this.countriesRanked = this._calculateCountryRanking();
  }

  private _calculateCountryRanking(): RatedCountry[] {
    return this.storeService.countries
      .map((country) => {
        const entries = this.storeService.getEntriesByCountry(country);
        if (!entries.length) {
          console.log(country);
          return { ...country, rating: 0 };
        }
        const countryRating =
          entries.reduce(
            (accumulator, currentValue) => accumulator + currentValue.rating.getTotal(),
            0,
          ) / (entries.length ?? 1);
        return { ...country, rating: countryRating };
      })
      .sort((a, b) => b.rating - a.rating);
  }
}
