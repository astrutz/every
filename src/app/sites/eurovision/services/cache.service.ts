import { Injectable } from '@angular/core';
import { Entry } from '../dataobjects/entry.dataobject';
import { Country } from '../dataobjects/country.dataobject';
import { Contest } from '../dataobjects/contest.dataobject';
import { Entity } from '../dataobjects/entity.dataobject';

const CACHE_MAX_AGE = 1000 * 60 * 60 * 24; // 1 day
const CACHE_KEY_PREFIX = 'EVERY_CACHE';

/**
 * Service which caches backend responses for one day using LocalStorage
 */
@Injectable({
  providedIn: 'root',
})
export class CacheService {
  #isFresh = false;

  constructor() {
    const timestamp = localStorage.getItem(`${CACHE_KEY_PREFIX}_TIMESTAMP`);
    if (timestamp && +timestamp > Date.now() - CACHE_MAX_AGE) {
      this.#isFresh = true;
    }
  }

  #readEntities<T extends Entity>(keySuffix: string): T[] | null {
    if (!this.#isFresh) {
      return null;
    }
    try {
      const entities = localStorage.getItem(`${CACHE_KEY_PREFIX}_${keySuffix}`);
      if (!entities) {
        return null;
      }
      return JSON.parse(entities) as T[];
    } catch (err) {
      console.warn('Error retrieving cache item', err);
      console.warn('Requesting from Backend instead');
      return null;
    }
  }

  #writeEntities<T extends Entity>(keySuffix: string, entities: T[]): void {
    localStorage.setItem(`${CACHE_KEY_PREFIX}_${keySuffix}`, JSON.stringify(entities));
    localStorage.setItem(`${CACHE_KEY_PREFIX}_TIMESTAMP`, Date.now().toString());
  }

  public get countries(): Country[] | null {
    return this.#readEntities<Country>('COUNTRIES');
  }

  public get contests(): Contest[] | null {
    return this.#readEntities<Contest>('CONTESTS');
  }

  public get entries(): Entry[] | null {
    return this.#readEntities<Entry>('ENTRIES');
  }

  public set countries(countries: Country[]) {
    this.#writeEntities<Country>('COUNTRIES', countries);
  }

  public set contests(contests: Contest[]) {
    this.#writeEntities<Contest>('CONTESTS', contests);
  }

  public set entries(entries: Entry[]) {
    this.#writeEntities<Entry>('ENTRIES', entries);
  }

  public get isValid(): boolean {
    return (
      this.#isFresh && !!this.contests?.length && !!this.countries?.length && !!this.entries?.length
    );
  }
}
