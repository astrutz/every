import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { CountriesComponent } from './sites/countries/countries.component';
import { CountryComponent } from './sites/country/country.component';
import { ContestComponent } from './sites/contest/contest.component';
import { ContestsComponent } from './sites/contests/contests.component';
import { EntriesComponent } from './sites/entries/entries.component';
import { EntryComponent } from './sites/entry/entry.component';
import { CrudComponent } from './sites/crud/crud.component';
import { SearchComponent } from './sites/search/search.component';

export const Routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'crud',
    component: CrudComponent,
    pathMatch: 'full',
  },
  {
    path: 'countries',
    component: CountriesComponent,
    pathMatch: 'full',
  },
  {
    path: 'countries/:countryCode',
    component: CountryComponent,
  },
  {
    path: 'contests',
    component: ContestsComponent,
    pathMatch: 'full',
  },
  {
    path: 'contests/:year',
    component: ContestComponent,
  },
  {
    path: 'entries',
    component: EntriesComponent,
    pathMatch: 'full',
  },
  {
    path: 'entries/:id',
    component: EntryComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
    pathMatch: 'full',
  },
];
