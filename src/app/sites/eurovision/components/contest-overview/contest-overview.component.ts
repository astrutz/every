import { Component, inject, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Contest } from '../../dataobjects/contest.dataobject';
import { RankingTableComponent } from '../ranking-table/ranking-table.component';
import { Entry } from '../../dataobjects/entry.dataobject';
import { RouterLink } from '@angular/router';
import { ContentAreaComponent } from '../../../../components/content-area/content-area.component';
import { StoreService as EurovisionStoreService } from '../../services/store.service';

/**
 * Displays an overview of all ESCs with its top 10 songs, current entry page.
 */
@Component({
  selector: 'eurovision-contest-overview',
  imports: [RankingTableComponent, RouterLink, ContentAreaComponent],
  templateUrl: './contest-overview.component.html',
})
export class ContestOverviewComponent {
  protected readonly themeService: ThemeService = inject(ThemeService);
  readonly #storeService: EurovisionStoreService = inject(EurovisionStoreService);

  @Input({ required: true })
  public contest!: Contest | null;

  public get topTenEntries(): Entry[] {
    return this.#entries.sort((a, b) => b.totalRating - a.totalRating).slice(0, 10);
  }

  public get year(): number | undefined {
    return this.contest?.year;
  }

  public get colours(): string[] {
    if (this.contest) {
      return this.contest.colours;
    }
    return this.#storeService.getOldiesContest().colours;
  }

  get #entries(): Entry[] {
    if (this.contest) {
      return this.contest.entries.sort((a, b) => b.totalRating - a.totalRating).slice(0, 10);
    }
    return this.#storeService.getEntriesWithoutContest();
  }
}
