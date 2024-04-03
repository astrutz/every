import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'every-socials',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './socials.component.html',
})
export class SocialsComponent {
  @Input({ required: true })
  socials!: { icon: string; href: string }[];
}
