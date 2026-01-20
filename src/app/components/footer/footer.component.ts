import { Component } from '@angular/core';

/**
 * Global footer component, basically just a copyright text
 */
@Component({
    selector: 'every-footer',
    imports: [],
    templateUrl: './footer.component.html'
})
export class FooterComponent {
  /**
   * @returns The full year for copyright texts
   */
  protected get currentYear(): string {
    return new Date().getFullYear().toString();
  }
}
