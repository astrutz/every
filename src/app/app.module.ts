import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideNgIconsConfig } from '@ng-icons/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideNgIconsConfig({
      size: '1.5rem'
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
