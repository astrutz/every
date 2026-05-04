import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Entry } from '../dataobjects/entry.dataobject';
import { StoreService as EurovisionStoreService } from './store.service';

@Injectable({ providedIn: 'root' })
export class SearchService {
  protected readonly storeService = inject(EurovisionStoreService);

  public searchTerm$: WritableSignal<string> = signal('');

  public searchResults$ = computed<Entry[]>(() => {
    if (this.searchTerm$() === '' || this.searchTerm$().length < 3) {
      return [];
    }
    return this.storeService.entries$().filter((entry: Entry) => this.#matchesSearch(entry));
  });

  #matchesSearch(entry: Entry): boolean {
    const term = this.searchTerm$().toLowerCase();
    return entry.artist.toLowerCase().includes(term) || entry.title.toLowerCase().includes(term);
  }
}
