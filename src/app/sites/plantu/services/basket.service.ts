import { computed, inject, Injectable, signal } from '@angular/core';
import { BackendService as PlantuBackendService } from './backend.service';
import { StoreService as PlantuStoreService } from './store.service';
import { CareDto } from '../dataobjects/care.dataobject';

type BasketKey = 'watered' | 'sprayed' | 'fertilized' | 'trimmed' | 'wiped';

@Injectable({ providedIn: 'root' })
export class BasketService {
  #backendService = inject(PlantuBackendService);
  #storeService = inject(PlantuStoreService);

  #basket$ = signal<Record<BasketKey, Set<string>>>({
    watered: new Set(),
    sprayed: new Set(),
    fertilized: new Set(),
    trimmed: new Set(),
    wiped: new Set(),
  });

  public basket$ = computed(() => this.#basket$());

  public isEmpty$ = computed(() =>
    [...Object.values(this.#basket$())].every((set) => set.size === 0),
  );

  public size$ = computed(() => {
    const basket = this.#basket$();
    return Object.values(basket).reduce((total, set) => total + set.size, 0);
  });

  public add(type: BasketKey, id: string): void {
    this.#basket$.update((state) => {
      const newState = { ...state };
      newState[type] = new Set(newState[type]); // defensive copy
      newState[type].add(id);
      return newState;
    });
  }

  public clear(type?: BasketKey): void {
    this.#basket$.update((state) => {
      const newState = { ...state };

      if (type) {
        newState[type] = new Set();
      } else {
        (Object.keys(newState) as BasketKey[]).forEach((k) => (newState[k] = new Set()));
      }

      return newState;
    });
  }

  public has(type: BasketKey, id: string): boolean {
    const items = this.#basket$()[type];
    return items.has(id);
  }

  public remove(type: BasketKey, id: string): void {
    this.#basket$.update((state) => {
      const newState = { ...state };
      newState[type] = new Set(newState[type]);
      newState[type].delete(id);
      return newState;
    });
  }

  public async submit(): Promise<void> {
    await this.#backendService.postCare(this.#dto);
    await this.#storeService.loadFromBackend();
    this.clear();
  }

  get #dto(): CareDto {
    const basket = this.#basket$();

    return Object.fromEntries(
      Object.entries(basket).map(([key, value]) => [key, [...value]]),
    ) as CareDto;
  }
}
