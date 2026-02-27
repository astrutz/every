import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs';
import { StoreService as EurovisionStoreService } from './store.service';

export type BreadcrumbItem = {
  name: string;
  link: string;
};

/**
 * Service which creates a dynamic breadcrumb depending on the URL
 */
@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  readonly #router = inject(Router);
  readonly #store = inject(EurovisionStoreService);

  constructor() {
    this.#createBreadcrumbItems(this.#router.url);
    this.#router.events
      .pipe(
        tap(() => {
          this.#createBreadcrumbItems(this.#router.url);
        }),
        shareReplay(1),
      )
      .subscribe();
  }

  #breadcrumbItems: BreadcrumbItem[] = [];

  public get breadcrumbItems(): BreadcrumbItem[] {
    return this.#breadcrumbItems;
  }

  #createBreadcrumbItems(url: string) {
    const urlSplit = url.split('/');
    this.#breadcrumbItems = urlSplit.map((urlSegment: string) => {
      const item = _breadcrumbMap.get(urlSegment);
      if (item) {
        return item;
      }
      const countryName = this.#store
        .countries$()
        .find((country) => country.code === urlSegment)?.name;
      if (countryName) {
        return {
          name: countryName,
          link: `/${urlSegment}`,
        };
      }
      const contestName = this.#store
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
