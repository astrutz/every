import { Routes } from '@angular/router';
import { Routes as HomeRoutes } from './sites/home/app.routes';

export const routes: Routes = [
  {
    path: '',
    children: HomeRoutes,
  },
  // {
  //   path: 'eloglicko',
  //   children: EloglickoRoutes,
  // },
];
