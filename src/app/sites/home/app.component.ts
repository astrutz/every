import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeroComponent],
  selector: 'home-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
