import { Component, computed, inject, input, Input, InputSignal, Signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Contest } from '../../dataobjects/contest.dataobject';
import { Entry } from '../../dataobjects/entry.dataobject';
import { RouterLink } from '@angular/router';
import { RankingTableComponent } from '../ranking-table/ranking-table.component';

@Component({
  selector: 'eurovision-contest-overview',
  standalone: true,
  imports: [RouterLink, RankingTableComponent],
  templateUrl: './contest-overview.component.html',
})
export class ContestOverviewComponent {
  protected readonly themeService: ThemeService = inject(ThemeService);

  @Input({ required: true })
  public contest!: Contest;
}
