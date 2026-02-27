import { Component, inject, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Contest } from '../../dataobjects/contest.dataobject';
import { RankingTableComponent } from '../ranking-table/ranking-table.component';
import { Entry } from '../../dataobjects/entry.dataobject';

/**
 * Displays an overview of all ESCs with its top 10 songs, current entry page.
 */
@Component({
  selector: 'eurovision-contest-overview',
  imports: [RankingTableComponent],
  templateUrl: './contest-overview.component.html',
})
export class ContestOverviewComponent {
  protected readonly themeService: ThemeService = inject(ThemeService);

  @Input({ required: true })
  public contest!: Contest;

  get topTenEntries(): Entry[] {
    return this.contest.entries.sort((a, b) => b.totalRating - a.totalRating).slice(0, 10);
  }
}
