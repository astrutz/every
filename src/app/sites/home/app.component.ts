import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeroComponent, AboutComponent, SkillsComponent],
  selector: 'home-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
