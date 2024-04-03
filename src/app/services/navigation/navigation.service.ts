import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _isOpen = false;

  get isOpen(): boolean {
    return this._isOpen;
  }

  set isOpen(newVal) {
    this._isOpen = newVal;
  }
}
