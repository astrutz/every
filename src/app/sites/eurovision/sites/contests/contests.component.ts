import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { ContentAreaComponent } from '../../../../components/content-area/content-area.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RankingTableComponent } from '../../components/ranking-table/ranking-table.component';
import { LoadingComponent } from '../../../../components/loading/loading.component';
import { NgClass } from '@angular/common';
import { StoreService as EurovisionStoreService } from '../../services/store.service';
import { Entry } from '../../dataobjects/entry.dataobject';
import { RatedContest } from '../../dataobjects/contest.dataobject';

type TabKey = { key: keyof Entry | undefined; name: string };

@Component({
  selector: 'eurovision-contests',
  imports: [
    ContentAreaComponent,
    BreadcrumbComponent,
    RankingTableComponent,
    LoadingComponent,
    NgClass,
  ],
  templateUrl: './contests.component.html',
})
export class ContestsComponent {
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

  protected contestsRanked$: Signal<RatedContest[]> = computed(() =>
    this.calculateContestRanking(this.criteria$()),
  );

  protected calculateContestRanking(criteria?: keyof Entry): RatedContest[] {
    return this.storeService
      .contests$()
      .map((contest) => {
        const entries = contest.entries;
        if (!entries.length) {
          return { ...contest, rating: 0 };
        }
        const contestRating =
          entries.reduce(
            (accumulator, currentValue) =>
              accumulator + (criteria ? +currentValue[criteria] : currentValue.totalRating),
            0,
          ) / (entries.length ?? 1);
        return { ...contest, rating: contestRating };
      })
      .sort((a, b) => b.rating - a.rating);
  }

  setCriteria(event: Event) {
    const criteria = (event.target as HTMLSelectElement).value;
    if (criteria === 'undefined') {
      this.criteria$.set(undefined);
    } else {
      this.criteria$.set(criteria as keyof Entry);
    }
  }
}
