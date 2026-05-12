import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { Plant } from '../dataobjects/plant.dataobject';
import { Task } from '../dataobjects/task.dataobject';

/**
 * Service which queries the backend to load plants via fetch API
 */
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

  public async getPlants(): Promise<Plant[]> {
    return this.#fetchJson<Plant[]>('/plantu');
  }

  public async getTasks(): Promise<Task[]> {
    return this.#fetchJson<any>('/plantu/tasks');
  }

  // async #putJson<T>(path: string, data: T) {
  //   const res = await fetch(`${this.#base}${path}`, {
  //     headers: this.#headers,
  //     credentials: 'omit',
  //     method: 'PUT',
  //     body: JSON.stringify(data),
  //   });
  //   if (!res.ok) {
  //     const text = await res.text().catch(() => '');
  //     throw new Error(`HTTP ${res.status} ${res.statusText} - ${text}`);
  //   }
  // }
  //
  // public async updatePlant(id: string, entry: EntryDto) {
  //   await this.#putJson<EntryDto>(`/eurovision/entries/${id}`, entry);
  // }
}
