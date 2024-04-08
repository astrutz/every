import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { Social } from '../../sites/home/types/social.type';

/**
 * Displays a vertical flex of social media icons ("socials")
 */
@Component({
  selector: 'every-socials',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './socials.component.html',
})
export class SocialsComponent {
  /**
   * List of socials to be displayed with href and icon
   */
  @Input({ required: true })
  socials!: Social[];
}
