import { Component } from '@angular/core';
import {
  lucideCopy,
  lucideGithub,
  lucideInstagram,
  lucideLinkedin,
  lucideMail,
} from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { SocialsComponent } from '../../../../components/socials/socials.component';
import { StoreService } from '../../services/store.service';
import { Social } from '../../types/social.type';
import { simpleXing } from '@ng-icons/simple-icons';

/**
 * Displays all contact information containing socials and email
 */
@Component({
  selector: 'every-contact',
  standalone: true,
  imports: [NgIcon, SocialsComponent],
  templateUrl: './contact.component.html',
  viewProviders: [
    provideIcons({
      lucideGithub,
      lucideLinkedin,
      lucideInstagram,
      lucideCopy,
      lucideMail,
      simpleXing,
    }),
  ],
})
export class ContactComponent {
  /**
   * Indicates if the address was copied and therefore a chip should be displayed
   */
  protected showCopyChip: boolean = false;

  /**
   * Mail address to be displayed, could be moved into type somewhen
   */
  protected mail: string = 'hello@alexstrutz.dev';

  constructor(private readonly _store: StoreService) {}

  /**
   * @returns The propagated list of socials
   */
  protected get socials(): Social[] {
    return this._store.socials;
  }

  /**
   * Copies a text to the clipboard if the feature is available
   * @param text Text to be copied, at the moment only the mail addres
   */
  protected copyTextToClipboard(text: string): void {
    if (navigator && 'clipboard' in navigator) {
      navigator.clipboard.writeText(text);
      this.showCopyChip = true;
    }
  }
}
