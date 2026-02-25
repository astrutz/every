import { Injectable } from '@angular/core';

/**
 * Simple state service to keep track if the mobile navigation is open
 */
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  /**
   * State containing the navigation
   */
  #isOpen: boolean = false;

  /**
   * @return State containing the navigation
   */
  get isOpen(): boolean {
    return this.#isOpen;
  }

  /**
   * @param newVal State containing the navigation
   */
  set isOpen(newVal: boolean) {
    this.#isOpen = newVal;
  }
}
