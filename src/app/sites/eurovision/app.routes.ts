import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const Routes: Route[] = [
  {
    path: '',
    component: AppComponent,
  },
];

export const EurovisionRouting = RouterModule.forChild(Routes);
