import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ColorschemeService } from '../../../../services/colorscheme/colorscheme.service';
import { TagComponent } from '../../../../components/tag/tag.component';

@Component({
  selector: 'every-experience',
  standalone: true,
  imports: [NgOptimizedImage, TagComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  constructor(private _colorschemeService: ColorschemeService) {}

  experiences = [
    {
      title: 'Full Stack Engineer',
      company: 'babiel',
      href: 'https://www.babiel.com',
      tasks: [
        'Relaunch and implementation of an Angular based web app for display of publications and statistics.',
        'Worked with a variety of technologies, including Angular, Typescript, TailwindCSS, EveryLayout, GraphQL, Compodoc, Jest and others.',
        'Acted as mentor, foreman and technical frontend lead.',
      ],
      duration: 'Jan 2023 - Present',
    },
    {
      title: 'Web Developer (Working Student)',
      company: 'appsoluts',
      href: 'https://appsoluts.de',
      tasks: ['todo'],
      duration: 'Apr 2022 - Dec 2022',
    },
    // todo: add experiences
  ];

  get logoColor(): string {
    return this._colorschemeService.colorscheme === 'light' ? 'dark' : 'light';
  }

  getLogoPath(company: string): string {
    return `/assets/logos/${company}_${this.logoColor}.svg`;
  }
}
