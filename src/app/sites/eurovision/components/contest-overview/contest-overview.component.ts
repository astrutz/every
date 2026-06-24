import { Component, inject, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Contest } from '../../dataobjects/contest.dataobject';
import { RankingTableComponent } from '../ranking-table/ranking-table.component';
import { Entry } from '../../dataobjects/entry.dataobject';
import { RouterLink } from '@angular/router';
import { ContentAreaComponent } from '../../../../components/content-area/content-area.component';
import { StoreService as EurovisionStoreService } from '../../services/store.service';
import { Util } from '../../services/util';

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

  public get year(): number | undefined {
    return this.contest?.year;
  }

  public get colours(): string[] {
    if (this.contest) {
      return this.contest.colours;
    }
    return this.#storeService.getOldiesContest().colours;
  }

  get entries(): Entry[] {
    if (this.contest) {
      return Util.sortEntries(this.contest.entries).slice(0, 10);
    }
    return Util.sortEntries(this.#storeService.getEntriesWithoutContest()).slice(0, 10);
  }
}
