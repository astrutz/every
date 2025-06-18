import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreService as EurovisionStoreService } from './services/store.service';
import { Contest } from './dataobjects/contest.dataobject';
import { NgClass } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { ContestOverviewComponent } from './components/contest-overview/contest-overview.component';

@Component({
  standalone: true,
  imports: [RouterModule, NgClass, ContestOverviewComponent],
  selector: 'eurovision-root',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private readonly _storeService: EurovisionStoreService = inject(EurovisionStoreService);

  protected get contests(): Contest[] {
    return this._storeService.contests;
  }
}
