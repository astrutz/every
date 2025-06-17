// todo: store all data from backend or json in here

import { Injectable } from '@angular/core';
import { Contest } from '../dataobjects/contest.dataobject';
import { contests } from '../data/contests.data';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public get contests(): Contest[] {
    return contests;
  }
}
