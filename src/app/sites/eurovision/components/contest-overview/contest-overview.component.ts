import { Component, inject, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Contest } from '../../dataobjects/contest.dataobject';
import { Entry } from '../../dataobjects/entry.dataobject';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'eurovision-contest-overview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contest-overview.component.html',
})
export class ContestOverviewComponent {
  protected readonly themeService: ThemeService = inject(ThemeService);

  @Input({ required: true })
  public contest!: Contest;

  protected getFlag(entry: Entry): string {
    return (
      entry.country.code +
      (this.contest.colours[2].toLocaleLowerCase() === '#ffffff' ? '-light' : '-dark')
    );
  }
}
