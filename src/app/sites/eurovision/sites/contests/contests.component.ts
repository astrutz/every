import { Component } from '@angular/core';
import { ContentAreaComponent } from '../../../../components/content-area/content-area.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RankingTableComponent } from '../../components/ranking-table/ranking-table.component';
import { LoadingComponent } from '../../../../components/loading/loading.component';
import { NgClass } from '@angular/common';
import { Entry } from '../../dataobjects/entry.dataobject';
import { Rated } from '../../dataobjects/rated.dataobject';
import { OverviewPageComponent } from '../../components/overview-page/overview-page.component';
import { Contest } from '../../dataobjects/contest.dataobject';

/**
 * Displays contests as a rated list
 */
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
export class ContestsComponent extends OverviewPageComponent<Rated<Contest>> {
  protected override calculateRanking(criteria?: keyof Entry): Rated<Contest>[] {
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
}
