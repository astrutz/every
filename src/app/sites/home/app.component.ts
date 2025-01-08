import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { WorkComponent } from './components/work/work.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavigationService } from '../../services/navigation/navigation.service';
import { NgClass } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { LanguageSwitchComponent } from '../../components/language-switch/language-switch.component';

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
    NgClass,
    NgIcon,
    LanguageSwitchComponent,
  ],
  selector: 'home-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected navigationService = inject(NavigationService);
}
