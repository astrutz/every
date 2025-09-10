import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs';
import { countries } from '../data/countries.data';
import { contests } from '../data/contests.data';

export type BreadcrumbItem = {
  name: string;
  link: string;
};

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private _router = inject(Router);

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
      const countryName = countries.find((country) => country.code === urlSegment)?.name;
      if (countryName) {
        return {
          name: countryName,
          link: `/${urlSegment}`,
        };
      }
      const contestName = contests.find((contest) => contest.year.toString() === urlSegment)?.year;
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
      name: 'Home',
      link: '',
    },
  ],
  [
    'eurovision',
    {
      name: 'Eurovision',
      link: '/eurovision',
    },
  ],
  [
    'countries',
    {
      name: 'Länder',
      link: '/eurovision/countries',
    },
  ],
  [
    'contests',
    {
      name: 'Contents',
      link: '/eurovision/contests',
    },
  ],
]);
