import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { BackendService as PlantuBackendService } from './backend.service';
import { Plant } from '../dataobjects/plant.dataobject';
import { Task } from '../dataobjects/task.dataobject';

/**
 * Store service used as a single source of truth
 */
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  readonly #backendService = inject(PlantuBackendService);

  #plants$: WritableSignal<Plant[]> = signal([]);
  #tasks$: WritableSignal<Task[]> = signal([]);

  constructor() {
    this.#loadFromBackend();
  }

  public isLoading$ = computed<boolean>(() => this.#plants$().length === 0);

  public plants$ = computed<Plant[]>(() => this.#plants$());
  public tasks$ = computed<Task[]>(() => this.#tasks$());

  #loadFromBackend(): void {
    this.#loadPlants();
    this.#loadTasks();
  }

  async #loadPlants(): Promise<void> {
    const plants = await this.#backendService.getPlants();
    this.#plants$.set(plants);
  }

  async #loadTasks(): Promise<void> {
    const tasks = await this.#backendService.getTasks();
    this.#tasks$.set(tasks);
  }
}
