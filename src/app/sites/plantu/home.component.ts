import { Component, computed, inject } from '@angular/core';
import { ContentAreaComponent } from '../../components/content-area/content-area.component';
import { CardComponent } from './components/card/card.component';
import { StoreService as PlantuStoreService } from './services/store.service';
import { BasketService } from './services/basket.service';

@Component({
  selector: 'plantu-home',
  templateUrl: 'home.component.html',
  imports: [ContentAreaComponent, CardComponent],
})
export class HomeComponent {
  readonly #storeService = inject(PlantuStoreService);
  protected readonly basketService = inject(BasketService);

  tasks$ = computed(() => this.#storeService.tasks$());

  protected getLocalDate(dateString: string): string {
    let localDate = '';
    const date = new Date(dateString);
    const today = new Date();
    if (date.toISOString().split('T')[0] === today.toISOString().split('T')[0]) {
      localDate += 'Heute, ';
    }
    localDate += date.toLocaleDateString(undefined, { dateStyle: 'long' });
    return localDate;
  }
}
