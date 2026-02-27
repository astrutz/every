import { Routes } from '@angular/router';
import { Routes as HomeRoutes } from './sites/home/app.routes';
import { Routes as EloglickoRoutes } from './sites/eloglicko/app.routes';
import { Routes as EurovisionRoutes } from './sites/eurovision/eurovision.routes';

export const routes: Routes = [
  {
    path: '',
    children: HomeRoutes,
  },
  {
    path: 'eurovision',
    children: EurovisionRoutes,
  },
  {
    path: 'eloglicko',
    children: EloglickoRoutes,
  },
];
