import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Contest } from '../dataobjects/contest.dataobject';
import { Country } from '../dataobjects/country.dataobject';
import { Entry } from '../dataobjects/entry.dataobject';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _backendService = inject(BackendService);

  private _countries$: WritableSignal<Country[]> = signal([]);
  private _contests$: WritableSignal<Contest[]> = signal([]);
  private _entries$: WritableSignal<Entry[]> = signal([]);

  constructor() {
    // todo if has cache → use cache
    // todo else HTTP request
    this.loadCountries();
    this.loadContests();
    this.loadEntries();
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

  private async loadCountries(): Promise<void> {
    const countries = await this._backendService.getCountries();
    this._countries$.set(countries);
  }

  private async loadContests(): Promise<void> {
    const contests = await this._backendService.getContests();
    this._contests$.set(contests);
  }

  private async loadEntries(): Promise<void> {
    const entries = await this._backendService.getEntries();
    this._entries$.set(entries);
  }
}
