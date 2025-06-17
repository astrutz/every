import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const Routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
];

export const EurovisionRouting = RouterModule.forChild(Routes);
