import { ChangeDetectionStrategy, Component, inject, Input, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideBrushCleaning,
  lucideCheck,
  lucideClockPlus,
  lucideDroplet,
  lucideDumbbell,
  lucideSprayCan,
  lucideSprout,
} from '@ng-icons/lucide';
import { Plant } from '../../dataobjects/plant.dataobject';
import { BasketService } from '../../services/basket.service';
import { SnoozeModalComponent } from '../snooze-modal/snooze-modal.component';
import { StoreService } from '../../services/store.service';
import { SnoozeDto } from '../../dataobjects/snooze.dataobject';

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
      lucideDumbbell,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  protected readonly basketService = inject(BasketService);
  protected readonly storeService = inject(StoreService);

  @Input({ required: true })
  plant!: Plant;

  @Input({ required: true })
  targetDate!: string;

  protected isModalOpen$ = signal(false);

  protected isToday(key: keyof Plant): boolean {
    const date = this.plant[key]?.toString().split('T')[0];
    return this.targetDate === date;
  }

  protected async snoozeAll(date: Date): Promise<void> {
    const snoozeDto: SnoozeDto = {};

    if (this.isToday('nextWatering')) {
      snoozeDto.wateringUntil = date.toISOString();
    }
    if (this.isToday('nextSpraying')) {
      snoozeDto.sprayingUntil = date.toISOString();
    }
    if (this.isToday('nextFertilizing')) {
      snoozeDto.fertilizingUntil = date.toISOString();
    }
    if (this.isToday('nextCutting')) {
      snoozeDto.cuttingUntil = date.toISOString();
    }
    if (this.isToday('nextWiping')) {
      snoozeDto.wipingUntil = date.toISOString();
    }

    await this.storeService.snoozePlant(this.plant._id, snoozeDto);
    this.isModalOpen$.set(false);
  }
}
