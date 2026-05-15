import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideBrushCleaning,
  lucideCheck,
  lucideClockPlus,
  lucideDroplet,
  lucideSprayCan,
  lucideSprout,
  lucideWandSparkles,
} from '@ng-icons/lucide';
import { Plant } from '../../dataobjects/plant.dataobject';
import { BasketService } from '../../services/basket.service';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  protected readonly basketService = inject(BasketService);

  @Input({ required: true })
  plant!: Plant;

  @Input({ required: true })
  targetDate!: string;

  protected isToday(key: keyof Plant): boolean {
    const date = this.plant[key]?.toString().split('T')[0];
    return this.targetDate === date;
  }
}
