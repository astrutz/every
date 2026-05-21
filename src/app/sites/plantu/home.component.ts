import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { ContentAreaComponent } from '../../components/content-area/content-area.component';
import { CardComponent } from './components/card/card.component';
import { StoreService as PlantuStoreService } from './services/store.service';
import { BasketService } from './services/basket.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCircleCheck,
  lucideCircleX,
  lucideCloudUpload,
  lucideLoaderCircle,
  lucideX,
} from '@ng-icons/lucide';
import { NgClass } from '@angular/common';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'plantu-home',
  templateUrl: 'home.component.html',
  imports: [ContentAreaComponent, CardComponent, NgIcon, NgClass, LoadingComponent],
  providers: [
    provideIcons({
      lucideCloudUpload,
      lucideX,
      lucideLoaderCircle,
      lucideCircleCheck,
      lucideCircleX,
    }),
  ],
})
export class HomeComponent {
  readonly #storeService = inject(PlantuStoreService);
  protected readonly basketService = inject(BasketService);

  tasks$ = computed(() => this.#storeService.tasks$());
  protected requestIsPending$: WritableSignal<boolean> = signal(false);
  protected showToast$: WritableSignal<undefined | 'success' | 'error'> = signal(undefined);

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

  protected async submit(): Promise<void> {
    try {
      this.requestIsPending$.set(true);
      await this.basketService.submit();
      this.requestIsPending$.set(false);
      this.showToast$.set('success');
      setTimeout(() => {
        this.showToast$.set(undefined);
      }, 5000);
    } catch (e) {
      console.warn(e);
      this.showToast$.set('error');
      this.requestIsPending$.set(false);
      setTimeout(() => {
        this.showToast$.set(undefined);
      }, 5000);
    }
  }
}
