import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendService } from '../../services/backend.service';
import { StoreService as EurovisionStoreService } from '../../services/store.service';

export type State = 'idle' | 'saving' | 'success' | 'error';

/**
 * Generic form component to be used in CRUD eurovision pages
 */
@Component({
  template: '',
})
export abstract class FormComponent {
  protected readonly fb: FormBuilder = inject(FormBuilder);
  protected readonly backendService: BackendService = inject(BackendService);
  protected readonly storeService = inject(EurovisionStoreService);

  protected errorMessage: string = '';
  protected state: State = 'idle';

  protected onSubmit(): void {
    throw 'NotImplementedError';
  }
}
