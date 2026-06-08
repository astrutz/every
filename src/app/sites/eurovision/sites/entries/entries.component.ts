import { Component } from '@angular/core';
import { OverviewPageComponent } from '../../components/overview-page/overview-page.component';
import { Rated } from '../../dataobjects/rated.dataobject';
import { Entry } from '../../dataobjects/entry.dataobject';
import { LoadingComponent } from '../../../../components/loading/loading.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ContentAreaComponent } from '../../../../components/content-area/content-area.component';
import { RankingTableComponent } from '../../components/ranking-table/ranking-table.component';
import { LanguageSwitchComponent } from '../../../../components/language-switch/language-switch.component';
import { Util } from '../../services/util';

/**
 * Displays the list of entries ranked by their total ranking
 */
@Component({
  selector: 'eurovision-entries',
  imports: [
    LoadingComponent,
    BreadcrumbComponent,
    ContentAreaComponent,
    RankingTableComponent,
    LanguageSwitchComponent,
  ],
  templateUrl: './entries.component.html',
})
export class EntriesComponent extends OverviewPageComponent<Rated<Entry>> {
  protected override calculateRanking(): Rated<Entry>[] {
    const entriesWithRating = Util.sortEntries(this.storeService.entries$());
    return entriesWithRating.map((entry) => ({ ...entry, rating: entry.totalRating }));
  }
}
