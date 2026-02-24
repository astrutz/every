import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs';
import { StoreService as EurovisionStoreService } from './store.service';

export type BreadcrumbItem = {
  name: string;
  link: string;
};

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private _router = inject(Router);
  private _store = inject(EurovisionStoreService);

  constructor() {
    this._createBreadcrumbItems(this._router.url);
    this._router.events
      .pipe(
        tap(() => {
          this._createBreadcrumbItems(this._router.url);
        }),
        shareReplay(1),
      )
      .subscribe();
  }

  private _breadcrumbItems: BreadcrumbItem[] = [];

  public get breadcrumbItems(): BreadcrumbItem[] {
    return this._breadcrumbItems;
  }

  private _createBreadcrumbItems(url: string) {
    const urlSplit = url.split('/');
    this._breadcrumbItems = urlSplit.map((urlSegment: string) => {
      const item = _breadcrumbMap.get(urlSegment);
      if (item) {
        return item;
      }
      const countryName = this._store
        .countries$()
        .find((country) => country.code === urlSegment)?.name;
      if (countryName) {
        return {
          name: countryName,
          link: `/${urlSegment}`,
        };
      }
      const contestName = this._store
        .contests$()
        .find((contest) => contest.year.toString() === urlSegment)?.year;
      if (contestName) {
        return {
          name: urlSegment,
          link: `/${urlSegment}`,
        };
      }
      return {
        name: '',
        link: '',
      };
    });
  }
}

const _breadcrumbMap: Map<string, BreadcrumbItem> = new Map([
  [
    '',
    {
      name: $localize`Home`,
      link: '',
    },
  ],
  [
    'eurovision',
    {
      name: $localize`Eurovision`,
      link: '/eurovision',
    },
  ],
  [
    'countries',
    {
      name: $localize`Countries`,
      link: '/eurovision/countries',
    },
  ],
  [
    'contests',
    {
      name: $localize`Contests`,
      link: '/eurovision/contests',
    },
  ],
]);
