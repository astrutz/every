import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Contest } from '../dataobjects/contest.dataobject';
import { Country } from '../dataobjects/country.dataobject';
import { Entry } from '../dataobjects/entry.dataobject';
import { BackendService } from './backend.service';
import { CacheService } from './cache.service';

/**
 * Store service used as a single source of truth
 */
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  readonly #backendService = inject(BackendService);
  readonly #cacheService = inject(CacheService);

  #countries$: WritableSignal<Country[]> = signal([]);
  #contests$: WritableSignal<Contest[]> = signal([]);
  #entries$: WritableSignal<Entry[]> = signal([]);

  constructor() {
    if (this.#cacheService.isValid) {
      this.#loadFromCache();
    } else {
      this.#loadFromBackend();
    }
  }

  public isLoading$ = computed<boolean>(
    () =>
      this.#countries$().length === 0 ||
      this.#contests$().length === 0 ||
      this.#entries$().length === 0,
  );

  public countries$ = computed<Country[]>(() => this.#countries$());

  public contests$ = computed<Contest[]>(() => this.#contests$());

  public entries$ = computed<Entry[]>(() => this.#entries$());

  public getCountryByCode(code: string): Country | undefined {
    return this.#countries$().find((country) => country.code === code);
  }

  public getEntriesByCountry(country?: Country): Entry[] {
    return this.#entries$().filter((entry) => entry.country.code === country?.code);
  }

  public getContestByYear(year: number): Contest | undefined {
    return this.#contests$().find((contest) => contest.year === year);
  }

  #loadFromCache(): void {
    const countries = this.#cacheService.countries;
    const contests = this.#cacheService.contests;
    const entries = this.#cacheService.entries;
    if (countries && contests && entries) {
      this.#countries$.set(countries);
      this.#contests$.set(contests);
      this.#entries$.set(entries);
    } else {
      this.#loadFromBackend();
    }
  }

  #loadFromBackend(): void {
    this.#loadCountries();
    this.#loadContests();
    this.#loadEntries();
  }

  async #loadCountries(): Promise<void> {
    const countries = await this.#backendService.getCountries();
    this.#countries$.set(countries);
    this.#cacheService.countries = countries;
  }

  async #loadContests(): Promise<void> {
    const contests = await this.#backendService.getContests();
    this.#contests$.set(contests);
    this.#cacheService.contests = contests;
  }

  async #loadEntries(): Promise<void> {
    const entries = await this.#backendService.getEntries();
    this.#entries$.set(entries);
    this.#cacheService.entries = entries;
  }
}
