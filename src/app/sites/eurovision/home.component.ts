import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreService as EurovisionStoreService } from './services/store.service';
import { ContestOverviewComponent } from './components/contest-overview/contest-overview.component';
import { Contest } from './dataobjects/contest.dataobject';
import { LoadingComponent } from '../../components/loading/loading.component';
import { LanguageSwitchComponent } from '../../components/language-switch/language-switch.component';

@Component({
  imports: [RouterModule, ContestOverviewComponent, LoadingComponent, LanguageSwitchComponent],
  selector: 'eurovision-root',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly #storeService: EurovisionStoreService = inject(EurovisionStoreService);

  protected isLoading$ = computed<boolean>(() => this.#storeService.isLoading$());

  protected contests$ = computed<Contest[]>(() => this.#storeService.contests$());
}
