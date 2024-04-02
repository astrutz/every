import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeroComponent, AboutComponent, SkillsComponent, ExperienceComponent],
  selector: 'home-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
