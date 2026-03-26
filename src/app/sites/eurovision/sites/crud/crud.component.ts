import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { ContentAreaComponent } from '../../../../components/content-area/content-area.component';
import { NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntryFormComponent } from '../../components/forms/entry-form/entry-form.component';
import { StoreService as EurovisionStoreService } from '../../services/store.service';
import { LoadingComponent } from '../../../../components/loading/loading.component';
import { ContestFormComponent } from '../../components/forms/contest-form/contest-form.component';
import { LanguageSwitchComponent } from '../../../../components/language-switch/language-switch.component';

type CrudKey = { key: 'entries' | 'contests'; name: string };

/**
 * CRUD page containing different create and update forms
 */
@Component({
  selector: 'eurovision-crud',
  templateUrl: 'crud.component.html',
  imports: [
    ContentAreaComponent,
    NgClass,
    FormsModule,
    ReactiveFormsModule,
    EntryFormComponent,
    LoadingComponent,
    ContestFormComponent,
    LanguageSwitchComponent,
  ],
})
export class CrudComponent {
  protected readonly storeService = inject(EurovisionStoreService);

  protected keys: CrudKey[] = [
    { key: 'entries', name: $localize`Entries` },
    { key: 'contests', name: $localize`Contests` },
  ];

  protected tab$: WritableSignal<'entries' | 'contests'> = signal('entries');
  protected isLoading$ = computed<boolean>(() => this.storeService.isLoading$());

  protected setTab(event: Event) {
    const tab = (event.target as HTMLSelectElement).value;
    this.tab$.set(tab as 'entries' | 'contests');
  }
}
