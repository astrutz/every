import { Component, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';

/**
 * Displays a native with a unified UI
 */
@Component({
  selector: 'every-dialog',
  templateUrl: 'dialog.component.html',
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      lucideX,
    }),
  ],
})
export class DialogComponent {
  dialogId$ = input.required();
}
