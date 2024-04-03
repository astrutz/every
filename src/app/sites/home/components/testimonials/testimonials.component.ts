import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { StoreService } from '../../services/store.service';
import { Testimonial } from '../../types/testimonial.type';

@Component({
  selector: 'every-testimonials',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  constructor(private readonly _store: StoreService) {}

  protected get testimonials(): Testimonial[] {
    return this._store.testimonials;
  }
}
