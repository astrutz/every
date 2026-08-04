import { Component, output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';

/**
 * Global overlay to display some helping hints
 */
@Component({
  selector: 'every-help-dialog',
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      lucideX,
    }),
  ],
  templateUrl: './help-dialog.component.html',
})
export class HelpDialogComponent {
  public closed$ = output();
}
