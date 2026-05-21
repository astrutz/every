import {
  AfterViewInit,
  Component,
  computed,
  input,
  OnDestroy,
  output,
  signal,
} from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'plantu-snooze-modal',
  templateUrl: 'snooze-modal.component.html',
  styleUrl: 'snooze-modal.component.scss',
  imports: [NgIcon],
})
export class SnoozeModalComponent implements AfterViewInit, OnDestroy {
  isOpen$ = input<boolean>(false);
  title$ = input<string>('');
  initialDate$ = input<string>('');

  protected snoozedDate$ = signal(new Date());
  protected isLoading$ = signal(false);
  onClose$ = output();
  onSnooze$ = output<Date>();

  ngAfterViewInit() {
    this.snoozedDate$.set(new Date(this.initialDate$()));
  }

  ngOnDestroy() {
    this.isLoading$.set(false);
  }

  protected dateForInput$ = computed(() => {
    return this.snoozedDate$().toISOString().split('T')[0];
  });

  protected onDateChange(event: Event): void {
    const inputElement: HTMLInputElement = event.target as HTMLInputElement;
    if (inputElement.valueAsDate) {
      this.snoozedDate$.set(inputElement.valueAsDate);
    }
  }

  protected setToTomorrow(): void {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    this.snoozedDate$.set(date);
  }

  protected setToDayAfterTomorrow(): void {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    this.snoozedDate$.set(date);
  }

  protected setToIn3Days(): void {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    this.snoozedDate$.set(date);
  }

  protected setToIn7Days(): void {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    this.snoozedDate$.set(date);
  }

  protected setToNextMonday(): void {
    const date = new Date();
    const day = date.getDay();
    const diff = (8 - day) % 7;
    date.setDate(date.getDate() + diff);
    this.snoozedDate$.set(date);
  }
}
