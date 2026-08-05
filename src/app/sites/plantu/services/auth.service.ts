import { computed, Injectable, signal } from '@angular/core';
import { environment } from '../../../environment';

/**
 * Holds the plantu auth state. A user can only send request if logged in
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  #enteredPassword$ = signal('');

  isLoggedIn$ = computed(
    () =>
      (localStorage.getItem(`EVERY_PLANTU`) ?? this.#enteredPassword$()) === environment.password,
  );

  login(password: string): boolean {
    const encodedPassword = btoa(password);
    this.#enteredPassword$.set(encodedPassword);
    if (encodedPassword === environment.password) {
      localStorage.setItem(`EVERY_PLANTU`, encodedPassword);
      return true;
    }
    return false;
  }
}
