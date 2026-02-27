import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LoadingComponent } from '../../../../components/loading/loading.component';
import { StoreService as EurovisionStoreService } from '../../services/store.service';
import { ContentAreaComponent } from '../../../../components/content-area/content-area.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ThemeService } from '../../services/theme.service';
import { RankingTableComponent } from '../../components/ranking-table/ranking-table.component';
import { Entry } from '../../dataobjects/entry.dataobject';

/**
 * Displays a detail page for a single contest
 */
@Component({
  selector: 'eurovision-contest',
  imports: [LoadingComponent, ContentAreaComponent, BreadcrumbComponent, RankingTableComponent],
  templateUrl: './contest.component.html',
})
export class ContestComponent implements OnInit {
  #year: number = 0;
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #storeService = inject(EurovisionStoreService);
  protected readonly themeService = inject(ThemeService);

  ngOnInit() {
    this.#activatedRoute.params.subscribe((params: Params) => {
      this.#year = +(params['year'] ?? '');
    });
  }

  protected contest$ = computed(() => {
    if (!this.#storeService.isLoading$()) {
      return this.#storeService.getContestByYear(this.#year);
    }
    return undefined;
  });

  protected entries$ = computed<Entry[]>(() => this.contest$()?.entries ?? []);

  protected sortedEntries$ = computed<Entry[]>(() =>
    this.entries$().sort((a, b) => b.totalRating - a.totalRating),
  );
}
