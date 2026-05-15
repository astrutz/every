import { computed, Injectable, signal } from '@angular/core';

type BasketKey = 'watered' | 'sprayed' | 'fertilized' | 'trimmed' | 'wiped';

@Injectable({ providedIn: 'root' })
export class BasketService {
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

  public add(type: BasketKey, id: string): void {
    this.#basket$.update((state) => {
      const newState = { ...state };
      newState[type] = new Set(newState[type]); // defensive copy
      newState[type].add(id);
      return newState;
    });
    console.log(this.#basket$());
  }

  public remove(type: BasketKey, id: string): void {
    this.#basket$.update((state) => {
      const newState = { ...state };
      newState[type] = new Set(newState[type]);
      newState[type].delete(id);
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
}
