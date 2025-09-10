import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CountriesComponent } from './sites/countries/countries.component';
import { CountryComponent } from './sites/country/country.component';

export const Routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'countries',
    component: CountriesComponent,
    pathMatch: 'full',
    children: [],
  },
  {
    path: 'countries/:countryCode',
    component: CountryComponent,
  },
];

export const EurovisionRouting = RouterModule.forChild(Routes);
