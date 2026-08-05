import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { Plant } from '../dataobjects/plant.dataobject';
import { Task } from '../dataobjects/task.dataobject';
import { CareDto } from '../dataobjects/care.dataobject';
import { SnoozeDto } from '../dataobjects/snooze.dataobject';

/**
 * Service which queries the backend to load plants via fetch API
 */
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  #apiKey = environment.apiKey;
  #base = environment.apiUrl;

  public async getPlants(): Promise<Plant[]> {
    return this.#fetchJson<Plant[]>('/plantu');
  }

  public async getTasks(): Promise<Task[]> {
    return this.#fetchJson<Task[]>('/plantu/tasks');
  }

  public async patchSnooze(id: string, snoozeDto: SnoozeDto): Promise<void> {
    return this.#patchJson<SnoozeDto>(`/plantu/${id}/snooze`, snoozeDto);
  }

  public async postCare(careDto: CareDto): Promise<void> {
    return this.#postJson<CareDto>('/plantu/care', careDto);
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

  async #patchJson<T>(path: string, data: T) {
    const res = await fetch(`${this.#base}${path}`, {
      headers: this.#headers,
      credentials: 'omit',
      method: 'PATCH',
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`HTTP ${res.status} ${res.statusText} - ${text}`);
    }
  }

  async #postJson<T>(path: string, data: T) {
    const res = await fetch(`${this.#base}${path}`, {
      headers: this.#headers,
      credentials: 'omit',
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`HTTP ${res.status} ${res.statusText} - ${text}`);
    }
  }

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
}
