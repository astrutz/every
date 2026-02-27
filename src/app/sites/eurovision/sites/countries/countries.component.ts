import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RankingTableComponent } from '../../components/ranking-table/ranking-table.component';
import { RatedCountry } from '../../dataobjects/country.dataobject';
import { NgClass } from '@angular/common';
import { Entry } from '../../dataobjects/entry.dataobject';
import { LoadingComponent } from '../../../../components/loading/loading.component';
import { ContentAreaComponent } from '../../../../components/content-area/content-area.component';
import { OverviewPageComponent } from '../../components/overview-page/overview-page.component';

/**
 * Displays countries as a rated list
 */
@Component({
  selector: 'eurovision-countries',
  templateUrl: 'countries.component.html',
  imports: [
    BreadcrumbComponent,
    RankingTableComponent,
    NgClass,
    LoadingComponent,
    ContentAreaComponent,
  ],
})
export class CountriesComponent extends OverviewPageComponent<RatedCountry> {
  protected override calculateRanking(criteria?: keyof Entry): RatedCountry[] {
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
}
