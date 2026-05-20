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
import { SnoozeModalComponent } from '../snooze-modal/snooze-modal.component';

@Component({
  selector: 'plantu-card',
  imports: [NgIcon, SnoozeModalComponent],
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

  protected isModalOpen = false;

  protected isToday(key: keyof Plant): boolean {
    const date = this.plant[key]?.toString().split('T')[0];
    return this.targetDate === date;
  }

  protected resolveAll(): void {
    if (this.isToday('nextWatering')) {
      this.basketService.add('watered', this.plant._id);
    }
    if (this.isToday('nextSpraying')) {
      this.basketService.add('sprayed', this.plant._id);
    }
    if (this.isToday('nextFertilizing')) {
      this.basketService.add('fertilized', this.plant._id);
    }
    if (this.isToday('nextCutting')) {
      this.basketService.add('trimmed', this.plant._id);
    }
    if (this.isToday('nextWiping')) {
      this.basketService.add('wiped', this.plant._id);
    }
  }

  protected snoozeAll(date: Date): void {
    console.log(date); // todo
  }
}
