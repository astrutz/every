import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '../form.component';
import { ContestDto } from '../../../dataobjects/contest.dataobject';

@Component({
  selector: 'eurovision-contest-form',
  templateUrl: 'contest-form.component.html',
  imports: [FormsModule, ReactiveFormsModule],
})
export class ContestFormComponent extends FormComponent implements OnInit {
  get #formToContest(): ContestDto {
    const raw = this.form.getRawValue();
    return {
      year: raw.year,
      hostCountry: this.getCountryIDByCode(raw.hostCountry),
      colours: raw.colours.split(','),
    };
  }

  protected override onSearch() {
    const year = this.form.controls['year'].value;
    if (year) {
      const contest = this.storeService.getContestByYear(year);
      if (contest) {
        this.form.setValue({
          id: contest._id,
          year: year,
          hostCountry: contest.hostCountry.code,
          colours: contest.colours,
        });
      }
    }
  }

  protected override async onSubmit(): Promise<void> {
    this.state = 'saving';
    try {
      if (this.form.controls['id'].value) {
        await this.backendService.updateContest(
          this.form.controls['id'].value,
          this.#formToContest,
        );
      } else {
        await this.backendService.createContest(this.#formToContest);
      }
      this.state = 'success';
    } catch (err: unknown) {
      this.state = 'error';
      this.errorMessage = err?.toString() ?? '';
    }
  }

  ngOnInit(): void {
    this.state = 'idle';
    this.form = this.fb.group({
      id: null,
      year: null,
      hostCountry: null,
      colours: [],
    });
  }
}
