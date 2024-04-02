import { Component } from '@angular/core';
import { TagComponent } from '../../../../components/tag/tag.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideExternalLink } from '@ng-icons/lucide';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'every-work',
  standalone: true,
  imports: [TagComponent, NgIcon, NgOptimizedImage],
  templateUrl: './work.component.html',
  viewProviders: [
    provideIcons({
      lucideExternalLink,
    }),
  ],
})
export class WorkComponent {
  works = [
    {
      title: 'Digitale Publikationen der Bundesbank',
      description:
        'A modern platform for searching and reading digital publications of the German Federal Bank. This page includes a reactive read progress indication, as well as multiple navigations and an excellent accessibility and performance.',
      href: 'https://www.publikationen.bundesbank.de',
      preview: '/assets/works/digipub.png',
      technologies: ['Angular', 'todo'],
    },
    // todo: more
  ];
}
