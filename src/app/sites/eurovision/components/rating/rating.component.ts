import { Component, Input } from '@angular/core';

/**
 * Displays a rating as fuill and half stars
 */
@Component({
  selector: 'eurovision-rating',
  imports: [],
  templateUrl: './rating.component.html',
})
export class RatingComponent {
  @Input({ required: true })
  totalRating!: number;

  protected get fullStars(): number {
    const roundedRatingOutOfTen = Math.round(this.totalRating);
    const halfStarDeduction = this.hasHalfStar ? 1 : 0;
    return Math.round(roundedRatingOutOfTen / 2) - halfStarDeduction;
  }

  protected get hasHalfStar(): boolean {
    const roundedRatingOutOfTen = Math.round(this.totalRating);
    return roundedRatingOutOfTen % 2 === 1;
  }

  protected get emptyStars(): number {
    const roundedRatingOutOfTen = Math.round(this.totalRating);
    return 5 - Math.round(roundedRatingOutOfTen / 2);
  }
}
