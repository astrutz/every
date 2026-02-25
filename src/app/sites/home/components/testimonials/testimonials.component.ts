import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { StoreService } from '../../services/store.service';
import { Testimonial } from '../../types/testimonial.type';

/**
 * Displays a vertical flex list of testimonials with avatars and texts
 */
@Component({
  selector: 'every-testimonials',
  imports: [NgOptimizedImage],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  readonly #store = inject(StoreService);

  /**
   * @returns The propagated list of skills
   */
  protected get testimonials(): Testimonial[] {
    return this.#store.testimonials;
  }
}
