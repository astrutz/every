// todo: store all data from backend or json in here

import { Injectable } from '@angular/core';
import { Contest } from '../dataobjects/contest.dataobject';
import { contests } from '../data/contests.data';
import { countries } from '../data/countries.data';
import { Country } from '../dataobjects/country.dataobject';
import { entries } from '../data/entries.data';
import { Entry } from '../dataobjects/entry.dataobject';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public get contests(): Contest[] {
    return contests;
  }

  public getCountryByCode(code: string): Country | undefined {
    return countries.find((country) => country.code === code);
  }

  public getEntriesByCountry(country: Country): Entry[] {
    return entries.filter((entry) => entry.country === country);
  }
}
