import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { StoreService as EurovisionStoreService } from '../../services/store.service';
import { Entry } from '../../dataobjects/entry.dataobject';
import { RatedEntity } from '../../dataobjects/entity.dataobject';

export interface TabKey {
  key: keyof Entry | undefined;
  name: string;
}

/**
 * Abstract component to contain UI logic to display a ranked table with tabs
 */
@Component({
  selector: 'eurovision-overview-page',
  template: '',
})
export abstract class OverviewPageComponent<T extends RatedEntity> {
  protected readonly storeService = inject(EurovisionStoreService);
  protected tabKeys: TabKey[] = [
    // @ts-expect-error - Localize is some Angular syntax
    { key: undefined, name: $localize`Total` },
    // @ts-expect-error - Localize is some Angular syntax
    { key: 'energyRating', name: $localize`Energy` },
    // @ts-expect-error - Localize is some Angular syntax
    { key: 'stagingRating', name: $localize`Staging` },
    // @ts-expect-error - Localize is some Angular syntax
    { key: 'studioRating', name: $localize`Studio` },
    // @ts-expect-error - Localize is some Angular syntax
    { key: 'funRating', name: $localize`Fun` },
    // @ts-expect-error - Localize is some Angular syntax
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
