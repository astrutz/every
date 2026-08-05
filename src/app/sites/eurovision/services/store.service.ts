import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Contest } from '../dataobjects/contest.dataobject';
import { Country } from '../dataobjects/country.dataobject';
import { Entry } from '../dataobjects/entry.dataobject';
import { BackendService as EurovisionBackendService } from './backend.service';
import { CacheService } from './cache.service';

/**
 * Store service used as a single source of truth
 */
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  readonly #backendService = inject(EurovisionBackendService);
  readonly #cacheService = inject(CacheService);

  constructor() {
    if (this.#cacheService.isValid) {
      this.#loadFromCache();
    } else {
      this.#loadFromBackend();
    }
  }
  #contests$: WritableSignal<Contest[]> = signal([]);
  #countries$: WritableSignal<Country[]> = signal([]);

  #entries$: WritableSignal<Entry[]> = signal([]);

  public contests$ = computed<Contest[]>(() => this.#contests$());

  public countries$ = computed<Country[]>(() => this.#countries$());

  public entries$ = computed<Entry[]>(() => this.#entries$());

  public isLoading$ = computed<boolean>(
    () =>
      this.#countries$().length === 0 ||
      this.#contests$().length === 0 ||
      this.#entries$().length === 0,
  );

  public getContestByYear(year: number): Contest | undefined {
    return this.#contests$().find((contest) => contest.year === year);
  }

  public getCountryByCode(code: string): Country | undefined {
    return this.#countries$().find((country) => country.code === code);
  }

  public getEntriesByCountry(country?: Country): Entry[] {
    return this.#entries$().filter((entry) => entry.country.code === country?.code);
  }

  public getEntriesWithoutContest(): Entry[] {
    return this.#entries$().filter((entry) => !('contest' in entry));
  }

  public getEntryById(id: string): Entry | undefined {
    return this.#entries$().find((entry) => entry._id === id);
  }

  public getOldiesContest(): Contest {
    return {
      _id: '',
      colours: ['#d1d5db', '#1e1c1c', '#d1d5db', '#1e1c1c'],
      year: 0,
      entries: this.getEntriesWithoutContest(),
      hostCountry: {
        _id: '',
        code: '',
        name: '',
      },
    };
  }

  async #loadContests(): Promise<void> {
    const contests = await this.#backendService.getContests();
    this.#contests$.set(contests);
    this.#cacheService.contests = contests;
  }

  async #loadCountries(): Promise<void> {
    const countries = await this.#backendService.getCountries();
    this.#countries$.set(countries);
    this.#cacheService.countries = countries;
  }

  async #loadEntries(): Promise<void> {
    const entries = await this.#backendService.getEntries();
    this.#entries$.set(entries);
    this.#cacheService.entries = entries;
  }

  #loadFromBackend(): void {
    this.#loadCountries();
    this.#loadContests();
    this.#loadEntries();
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
}
