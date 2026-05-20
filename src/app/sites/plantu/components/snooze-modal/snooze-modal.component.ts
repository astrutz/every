import { Component, input, output } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

/**
 * Displays a modal with a date picker
 */
@Component({
  selector: 'plantu-snooze-modal',
  templateUrl: 'snooze-modal.component.html',
  styleUrl: 'snooze-modal.component.scss',
  imports: [NgIcon],
})
export class SnoozeModalComponent {
  isOpen$ = input<boolean>(false);
  title$ = input<string>('');
  initialDate$ = input<string>('');

  snoozedDate: Date = new Date(this.initialDate$());
  onClose$ = output();
  onSnooze$ = output<Date>();

  onDateChange(event: Event) {
    const inputElement: HTMLInputElement = event.target as HTMLInputElement;
    if (inputElement.valueAsDate) {
      this.snoozedDate = inputElement.valueAsDate;
    }
  }
}
