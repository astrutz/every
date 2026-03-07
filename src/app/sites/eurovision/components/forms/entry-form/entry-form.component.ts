import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '../form.component';
import { EntryDto } from '../../../dataobjects/entry.dataobject';

/**
 * Form to create or update entries
 */
@Component({
  selector: 'eurovision-entry-form',
  templateUrl: 'entry-form.component.html',
  imports: [FormsModule, ReactiveFormsModule],
})
export class EntryFormComponent extends FormComponent implements OnInit {
  protected form!: FormGroup;

  protected override async onSubmit(): Promise<void> {
    this.state = 'saving';
    try {
      if (this.form.controls['id'].value) {
        await this.backendService.updateEntry(this.form.controls['id'].value, this.#formToEntry);
      } else {
        await this.backendService.createEntry(this.#formToEntry);
      }
      this.state = 'success';
    } catch (err: unknown) {
      this.state = 'error';
      this.errorMessage = err?.toString() ?? '';
    }
  }

  get #formToEntry(): EntryDto {
    const raw = this.form.getRawValue();
    return {
      country: this.#getCountryIDByCode(raw.country),
      contest: this.#getContestIDByYear(raw.year),
      year: raw.year,
      place: raw.place,
      artist: raw.artist,
      title: raw.title,
      link: raw.link,
      energyRating: raw.energyRating,
      stagingRating: raw.stagingRating,
      studioRating: raw.studioRating,
      funRating: raw.funRating,
      vocalsRating: raw.vocalsRating,
    };
  }

  #getCountryIDByCode(countryCode: string): string {
    return this.storeService.getCountryByCode(countryCode.toUpperCase())?._id ?? '';
  }

  #getContestIDByYear(year: number): string {
    return this.storeService.getContestByYear(year)?._id ?? '';
  }

  ngOnInit(): void {
    this.state = 'idle';
    this.form = this.fb.group({
      id: null,
      country: null,
      name: null,
      title: null,
      artist: null,
      link: null,
      place: null,
      year: null,
      energyRating: null,
      stagingRating: null,
      studioRating: null,
      funRating: null,
      vocalsRating: null,
    });
  }
}
