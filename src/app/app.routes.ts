import { Routes } from '@angular/router';
import { Routes as HomeRoutes } from './sites/home/app.routes';
import { Routes as EloglickoRoutes } from './sites/eloglicko/app.routes';
import { Routes as EurovisionRoutes } from './sites/eurovision/eurovision.routes';
import { Routes as PlantuRoutes } from './sites/plantu/plantu.routes';

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
    path: 'plantu',
    children: PlantuRoutes,
  },
  {
    path: 'eloglicko',
    children: EloglickoRoutes,
  },
];
