import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EloglickoRouting } from './sites/eloglicko/app.routes';

@NgModule({
  imports: [RouterModule.forRoot([]), EloglickoRouting],
  exports: [RouterModule],
})
export class AppRoutingModule {}
