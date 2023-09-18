import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const Routes: Route[] = [
  {
    path: 'eloglicko',
    component: AppComponent,
  },
];

export const EloglickoRouting = RouterModule.forChild(Routes);
