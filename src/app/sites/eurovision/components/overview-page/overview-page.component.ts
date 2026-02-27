import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { StoreService as EurovisionStoreService } from '../../services/store.service';
import { Entry } from '../../dataobjects/entry.dataobject';
import { RatedCountry } from '../../dataobjects/country.dataobject';
import { RatedContest } from '../../dataobjects/contest.dataobject';

export type TabKey = { key: keyof Entry | undefined; name: string };

/**
 * Abstract component to contain UI logic to display a ranked table with tabs
 */
@Component({
  selector: 'eurovision-overview-page',
  template: '',
})
export abstract class OverviewPageComponent<T extends RatedCountry | RatedContest> {
  protected readonly storeService = inject(EurovisionStoreService);
  protected tabKeys: TabKey[] = [
    { key: undefined, name: $localize`Total` },
    { key: 'energyRating', name: $localize`Energy` },
    { key: 'stagingRating', name: $localize`Staging` },
    { key: 'studioRating', name: $localize`Studio` },
    { key: 'funRating', name: $localize`Fun` },
    { key: 'vocalsRating', name: $localize`Vocals` },
  ];

  protected isLoading$ = computed<boolean>(() => this.storeService.isLoading$());
  protected criteria$: WritableSignal<keyof Entry | undefined> = signal(undefined);

  protected entitiesRanked$: Signal<T[]> = computed(() => this.calculateRanking(this.criteria$()));

  protected calculateRanking(criteria?: keyof Entry): T[] {
    throw 'NotImplementedError';
  }

  protected setCriteria(event: Event) {
    const criteria = (event.target as HTMLSelectElement).value;
    if (criteria === 'undefined') {
      this.criteria$.set(undefined);
    } else {
      this.criteria$.set(criteria as keyof Entry);
    }
  }
}
