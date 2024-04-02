import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'every-skills',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  skills: { name: string; href: string }[] = [
    {
      name: 'Javascript',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
    },
    {
      name: 'Angular',
      href: 'https://angular.io/',
    },
    {
      name: 'Vue',
      href: 'https://vuejs.org/',
    },
    // todo: add more skills and add them to xing and linkedin accordingly
  ];
}
