import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Contest } from '../dataobjects/contest.dataobject';
import { Country } from '../dataobjects/country.dataobject';
import { Entry } from '../dataobjects/entry.dataobject';
import { BackendService } from './backend.service';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _backendService = inject(BackendService);
  private _cacheService = inject(CacheService);

  private _countries$: WritableSignal<Country[]> = signal([]);
  private _contests$: WritableSignal<Contest[]> = signal([]);
  private _entries$: WritableSignal<Entry[]> = signal([]);

  constructor() {
    if (this._cacheService.isValid) {
      this._loadFromCache();
    } else {
      this._loadFromBackend();
    }
  }

  public isLoading$ = computed<boolean>(
    () =>
      this._countries$().length === 0 ||
      this._contests$().length === 0 ||
      this._entries$().length === 0,
  );

  public countries$ = computed<Country[]>(() => this._countries$());

  public contests$ = computed<Contest[]>(() => this._contests$());

  public entries$ = computed<Entry[]>(() => this._entries$());

  public getCountryByCode(code: string): Country | undefined {
    return this._countries$().find((country) => country.code === code);
  }

  public getEntriesByCountry(country?: Country): Entry[] {
    return this._entries$().filter((entry) => entry.country.code === country?.code);
  }

  private _loadFromCache(): void {
    const countries = this._cacheService.countries;
    const contests = this._cacheService.contests;
    const entries = this._cacheService.entries;
    if (countries && contests && entries) {
      this._countries$.set(countries);
      this._contests$.set(contests);
      this._entries$.set(entries);
    } else {
      this._loadFromBackend();
    }
  }

  private _loadFromBackend(): void {
    this._loadCountries();
    this._loadContests();
    this._loadEntries();
  }

  private async _loadCountries(): Promise<void> {
    const countries = await this._backendService.getCountries();
    this._countries$.set(countries);
    this._cacheService.countries = countries;
  }

  private async _loadContests(): Promise<void> {
    const contests = await this._backendService.getContests();
    this._contests$.set(contests);
    this._cacheService.contests = contests;
  }

  private async _loadEntries(): Promise<void> {
    const entries = await this._backendService.getEntries();
    this._entries$.set(entries);
    this._cacheService.entries = entries;
  }
}
