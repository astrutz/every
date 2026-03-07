import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { ContentAreaComponent } from '../../../../components/content-area/content-area.component';
import { NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntryFormComponent } from '../../components/forms/entry-form/entry-form.component';
import { StoreService as EurovisionStoreService } from '../../services/store.service';
import { LoadingComponent } from '../../../../components/loading/loading.component';

type CrudKey = { key: 'entries' | 'contests' | 'countries'; name: string };

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
  ],
})
export class CrudComponent {
  protected readonly storeService = inject(EurovisionStoreService);

  protected keys: CrudKey[] = [
    { key: 'entries', name: $localize`Entries` },
    { key: 'contests', name: $localize`Contests` },
    { key: 'countries', name: $localize`Countries` },
  ];

  protected tab$: WritableSignal<'entries' | 'contests' | 'countries'> = signal('entries');
  protected isLoading$ = computed<boolean>(() => this.storeService.isLoading$());

  protected setTab(event: Event) {
    const tab = (event.target as HTMLSelectElement).value;
    this.tab$.set(tab as 'entries' | 'contests' | 'countries');
  }
}
