import { Component } from '@angular/core';
import { OverviewPageComponent } from '../../components/overview-page/overview-page.component';
import { Rated } from '../../dataobjects/rated.dataobject';
import { Entry } from '../../dataobjects/entry.dataobject';
import { LoadingComponent } from '../../../../components/loading/loading.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ContentAreaComponent } from '../../../../components/content-area/content-area.component';
import { RankingTableComponent } from '../../components/ranking-table/ranking-table.component';

/**
 * Displays the list of entries ranked by their total ranking
 */
@Component({
  selector: 'eurovision-entries',
  imports: [LoadingComponent, BreadcrumbComponent, ContentAreaComponent, RankingTableComponent],
  templateUrl: './entries.component.html',
})
export class EntriesComponent extends OverviewPageComponent<Rated<Entry>> {
  protected override calculateRanking(): Rated<Entry>[] {
    return this.storeService
      .entries$()
      .map((entry) => ({ ...entry, rating: entry.totalRating }))
      .sort((a, b) => b.rating - a.rating);
  }
}
