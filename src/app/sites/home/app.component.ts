import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { WorkComponent } from './components/work/work.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';

/**
 * Root component of the landing page, combines all visual elements
 */
@Component({
  standalone: true,
  imports: [
    RouterModule,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    WorkComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  selector: 'home-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
