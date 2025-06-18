import { Component, inject, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Contest } from '../../dataobjects/contest.dataobject';

@Component({
  selector: 'eurovision-contest-overview',
  standalone: true,
  imports: [],
  templateUrl: './contest-overview.component.html',
})
export class ContestOverviewComponent {
  protected readonly themeService: ThemeService = inject(ThemeService);

  @Input({ required: true })
  public contest!: Contest;
}
