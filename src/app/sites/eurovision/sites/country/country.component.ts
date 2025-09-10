import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Country } from '../../dataobjects/country.dataobject';
import { StoreService as EurovisionStoreService } from '../../services/store.service';
import { RankingTableComponent } from '../../components/ranking-table/ranking-table.component';
import { Entry } from '../../dataobjects/entry.dataobject';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'eurovision-country',
  templateUrl: 'country.component.html',
  standalone: true,
  imports: [RankingTableComponent, BreadcrumbComponent],
})
export class CountryComponent implements OnInit {
  protected country!: Country;
  protected activatedRoute = inject(ActivatedRoute);
  protected storeService = inject(EurovisionStoreService);
  protected _themeService = inject(ThemeService);

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const foundCountry = this.storeService.getCountryByCode(params['countryCode'] ?? '');
      if (foundCountry) {
        this.country = foundCountry;
      }
    });
  }

  get entries(): Entry[] {
    return this.storeService.getEntriesByCountry(this.country) ?? [];
  }

  get sortedEntries(): Entry[] {
    return this.entries.sort((a, b) => b.rating.getTotal() - a.rating.getTotal());
  }

  protected getFlag(code: string): string {
    return `${code}-${this._themeService.flagBackground}`;
  }
}
