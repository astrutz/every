import { Component, computed, inject, OnDestroy } from '@angular/core';
import { ContentAreaComponent } from '../../../../components/content-area/content-area.component';
import { LanguageSwitchComponent } from '../../../../components/language-switch/language-switch.component';
import { LoadingComponent } from '../../../../components/loading/loading.component';
import { StoreService as EurovisionStoreService } from '../../services/store.service';
import { FormsModule } from '@angular/forms';
import { Entry } from '../../dataobjects/entry.dataobject';
import { SearchService } from '../../services/search.service';
import { RouterLink } from '@angular/router';
import { TranslationPipe } from '../../pipes/translation.pipe';
import { ThemeService } from '../../services/theme.service';
import { RatingComponent } from '../../components/rating/rating.component';

@Component({
  selector: 'every-search',
  imports: [
    ContentAreaComponent,
    LanguageSwitchComponent,
    LoadingComponent,
    FormsModule,
    RouterLink,
    TranslationPipe,
    RatingComponent,
  ],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnDestroy {
  readonly #themeService = inject(ThemeService);
  protected readonly searchService = inject(SearchService);
  protected readonly storeService = inject(EurovisionStoreService);

  searchTerm = '';
  protected readonly Math = Math;
  protected isLoading$ = computed<boolean>(() => this.storeService.isLoading$());

  protected searchResults$ = computed<Entry[]>(() => this.searchService.searchResults$());

  protected getFlag(code: string): string {
    return `${code}-${this.#themeService.flagBackground}`;
  }

  protected onSearch(term?: string) {
    this.searchService.searchTerm$.set(term ?? this.searchTerm);
  }

  ngOnDestroy() {
    this.onSearch('');
  }
}
