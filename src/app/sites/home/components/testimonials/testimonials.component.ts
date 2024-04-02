import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'every-testimonials',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Thomas Thomasen',
      position: 'Founder - inboxgenie.io',
      text: '"Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development."',
      avatar: '/assets/headshot.webp',
    },
  ];
}
