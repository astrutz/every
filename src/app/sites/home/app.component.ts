import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeroComponent, AboutComponent],
  selector: 'home-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
