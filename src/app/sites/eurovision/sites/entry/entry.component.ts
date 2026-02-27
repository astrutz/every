import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { StoreService as EurovisionStoreService } from '../../services/store.service';
import { LoadingComponent } from '../../../../components/loading/loading.component';
import { ContentAreaComponent } from '../../../../components/content-area/content-area.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Util } from '../../services/util';
import { ThemeService } from '../../services/theme.service';

/**
 * Display a single entry as a detail view
 */
@Component({
  selector: 'eurovision-entry',
  imports: [LoadingComponent, ContentAreaComponent, BreadcrumbComponent, RouterLink],
  templateUrl: './entry.component.html',
})
export class EntryComponent implements OnInit {
  #id: string = '';
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #storeService = inject(EurovisionStoreService);
  readonly #sanitizer: DomSanitizer = inject(DomSanitizer);
  readonly #themeService = inject(ThemeService);

  ngOnInit() {
    this.#activatedRoute.params.subscribe((params: Params) => {
      this.#id = params['id'] ?? '';
    });
  }

  protected entry$ = computed(() => {
    if (!this.#storeService.isLoading$()) {
      return this.#storeService.getEntryById(this.#id);
    }
    return undefined;
  });

  protected get videoId(): SafeResourceUrl | null {
    const link = this.entry$()?.link;
    if (!link) {
      return null;
    }

    const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const match = link.match(regex);
    const id = match ? match[1] : null;
    if (!id) {
      return null;
    }
    return this.#sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${id}?controls=1;color=white;iv_load_policy=3;rel=0`,
    );
  }

  protected getFlag(code: string): string {
    return `${code}-${this.#themeService.flagBackground}`;
  }

  get #contest() {
    const entry = this.entry$();
    if (!entry) {
      return null;
    }
    return this.#storeService.getContestByYear(entry.year);
  }

  protected get totalEntriesOfContest() {
    return this.#contest?.entries.length ?? 0;
  }

  protected get placeInRanking() {
    const entries = this.#contest?.entries;
    if (!entries) {
      return 0;
    }
    const sortedEntries = entries.sort((a, b) => b.totalRating - a.totalRating);
    return sortedEntries.findIndex((entry) => entry.id === this.entry$()?.id) + 1;
  }

  protected readonly Util = Util;
}
