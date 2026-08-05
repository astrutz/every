import { Component, computed, HostListener, inject, signal, WritableSignal } from '@angular/core';
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
  lucideArrowUp,
} from '@ng-icons/lucide';
import { NgClass } from '@angular/common';
import { LoadingComponent } from '../../components/loading/loading.component';
import { LocationDropdownComponent } from './components/location-dropdown/location-dropdown.component';
import { Location as PlantLocation } from './dataobjects/location.dataobject';
import { Task } from './dataobjects/task.dataobject';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'plantu-home',
  templateUrl: 'home.component.html',
  imports: [
    ContentAreaComponent,
    CardComponent,
    NgIcon,
    NgClass,
    LoadingComponent,
    LocationDropdownComponent,
    DialogComponent,
    FormsModule,
  ],
  providers: [
    provideIcons({
      lucideCloudUpload,
      lucideX,
      lucideLoaderCircle,
      lucideCircleCheck,
      lucideCircleX,
      lucideArrowUp,
    }),
  ],
})
export class HomeComponent {
  readonly #storeService = inject(PlantuStoreService);
  readonly authService = inject(AuthService);
  protected readonly basketService = inject(BasketService);

  protected currentFilter = signal<PlantLocation>('Alle');
  private readonly homeLocations: PlantLocation[] = [
    'Schlafzimmer',
    'Flur',
    'Arbeitszimmer',
    'Wohnzimmer',
    'Balkon',
  ];

  @HostListener('window:scroll')
  protected onScroll() {
    this.showScrollToTop$.set(window.scrollY > 100);
  }

  protected tasks$ = computed(() => this.#getFilteredTasks());

  protected requestIsPending$ = signal(false);
  protected showToast$: WritableSignal<undefined | 'success' | 'error'> = signal(undefined);
  protected showScrollToTop$ = signal(false);

  protected passwordInput = '';

  #getFilteredTasks(): Task[] {
    const allTasks = this.#storeService.tasks$();
    const filter = this.currentFilter();

    if (filter === 'Alle') {
      return allTasks;
    }

    return allTasks
      .map((task) => {
        const filteredPlants = task.plants.filter((plant) =>
          filter === 'Zuhause'
            ? this.homeLocations.includes(plant.location as PlantLocation)
            : plant.location === filter,
        );
        return { ...task, plants: filteredPlants };
      })
      .filter((task) => task.plants.length > 0);
  }

  protected getLocalDate(dateString: string): string {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    let localDate = '';

    if (diffDays === 0) {
      localDate = 'Heute, ';
    } else if (diffDays === 1) {
      localDate = 'Morgen, ';
    } else if (diffDays === 2) {
      localDate = 'Übermorgen, ';
    } else if (diffDays === -1) {
      localDate = 'Gestern, ';
    } else if (diffDays === -2) {
      localDate = 'Vorgestern, ';
    }

    if (localDate === '') {
      localDate = date.toLocaleDateString(undefined, { dateStyle: 'long' });
    } else {
      localDate += date.toLocaleDateString(undefined, { dateStyle: 'long' });
    }

    return localDate;
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  protected onFilterChange(filter: string) {
    this.currentFilter.set(filter as PlantLocation);
  }

  protected async submit(): Promise<void> {
    try {
      if (this.authService.isLoggedIn$()) {
        this.requestIsPending$.set(true);
        await this.basketService.submit();
        this.requestIsPending$.set(false);
        this.showToast$.set('success');
        setTimeout(() => {
          this.showToast$.set(undefined);
        }, 5000);
      }
    } catch (e) {
      console.warn(e);
      this.showToast$.set('error');
      this.requestIsPending$.set(false);
      setTimeout(() => {
        this.showToast$.set(undefined);
      }, 5000);
    }
  }

  protected async sendPasswordAndSubmit(): Promise<void> {
    const isLoggedIn = this.authService.login(this.passwordInput);
    if (isLoggedIn) {
      await this.submit();
    }
    this.passwordInput = '';
  }
}
