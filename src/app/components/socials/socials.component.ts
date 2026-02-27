import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { Social } from '../../sites/home/types/social.type';

/**
 * Displays a vertical flex of social media icons ("socials")
 */
@Component({
  selector: 'every-socials',
  imports: [NgIcon],
  templateUrl: './socials.component.html',
})
export class SocialsComponent {
  @Input({ required: true })
  socials!: Social[];
}
