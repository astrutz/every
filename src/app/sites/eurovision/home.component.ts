import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreService as EurovisionStoreService } from './services/store.service';
import { ContestOverviewComponent } from './components/contest-overview/contest-overview.component';
import { Contest } from './dataobjects/contest.dataobject';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  imports: [RouterModule, ContestOverviewComponent, LoadingComponent],
  selector: 'eurovision-root',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private readonly _storeService: EurovisionStoreService = inject(EurovisionStoreService);

  protected isLoading$ = computed<boolean>(() => this._storeService.isLoading$());

  protected contests$ = computed<Contest[]>(() => this._storeService.contests$());
}
