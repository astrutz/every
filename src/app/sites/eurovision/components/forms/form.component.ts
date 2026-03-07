import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  protected form!: FormGroup;
  protected errorMessage: string = '';
  protected state: State = 'idle';

  protected getCountryIDByCode(countryCode: string): string {
    return this.storeService.getCountryByCode(countryCode.toUpperCase())?._id ?? '';
  }

  protected onSubmit(): void {
    throw 'NotImplementedError';
  }

  protected onSearch(): void {
    throw 'NotImplementedError';
  }
}
