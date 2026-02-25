import { Injectable } from '@angular/core';
import { Country } from '../dataobjects/country.dataobject';
import { Contest } from '../dataobjects/contest.dataobject';
import { Entry } from '../dataobjects/entry.dataobject';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  #base = environment.apiUrl;
  #apiKey = environment.apiKey;

  get #headers() {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    const key = this.#apiKey;
    if (key) {
      headers['x-api-key'] = key;
    }
    return headers;
  }

  async #fetchJson<T>(path: string): Promise<T> {
    const res = await fetch(`${this.#base}${path}`, {
      headers: this.#headers,
      credentials: 'omit',
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`HTTP ${res.status} ${res.statusText} - ${text}`);
    }
    return (await res.json()) as T;
  }

  public async getCountries(): Promise<Country[]> {
    return this.#fetchJson<Country[]>('/countries');
  }

  public async getContests(): Promise<Contest[]> {
    return this.#fetchJson<Contest[]>('/contests');
  }

  public async getContestByYear(year: number): Promise<Contest> {
    return this.#fetchJson<Contest>(`/contests?year=${year}`);
  }

  public async getTopEntries(year: number, limit = 10): Promise<Contest> {
    return this.#fetchJson<Contest>(`/contests/${year}/top?limit=${limit}`);
  }

  public async getEntries(year?: number, countryCode?: string): Promise<Entry[]> {
    const params = new URLSearchParams();
    if (year) {
      params.set('year', String(year));
    }
    if (countryCode) {
      params.set('country', countryCode);
    }
    const query = params.toString() ? `?${params.toString()}` : '';
    return this.#fetchJson<Entry[]>(`/entries${query}`);
  }

  public async getEntryById(id: string): Promise<Entry> {
    return this.#fetchJson<Entry>(`/entries/${id}`);
  }
}
