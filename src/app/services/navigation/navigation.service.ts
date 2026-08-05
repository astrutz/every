import { Injectable } from '@angular/core';

/**
 * Simple state service to keep track if the mobile navigation is open
 */
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  #isOpen = false;

  get isOpen(): boolean {
    return this.#isOpen;
  }

  set isOpen(newVal: boolean) {
    this.#isOpen = newVal;
  }
}
