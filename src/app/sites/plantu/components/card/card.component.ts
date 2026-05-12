import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCheck,
  lucideDroplet,
  lucideClockPlus,
  lucideSprayCan,
  lucideSprout,
  lucideBrushCleaning,
  lucideWandSparkles,
} from '@ng-icons/lucide';
import { Plant } from '../../dataobjects/plant.dataobject';

@Component({
  selector: 'plantu-card',
  imports: [NgIcon],
  templateUrl: './card.component.html',
  viewProviders: [
    provideIcons({
      lucideCheck,
      lucideDroplet,
      lucideClockPlus,
      lucideSprayCan,
      lucideSprout,
      lucideBrushCleaning,
      lucideWandSparkles,
    }),
  ],
})
export class CardComponent {
  @Input({ required: true })
  plant!: Plant;

  @Input({ required: true })
  targetDate!: string;

  protected isToday(key: keyof Plant): boolean {
    const date = this.plant[key]?.toString().split('T')[0];
    return this.targetDate === date;
  }
}
