import { Component } from '@angular/core';
import { TagComponent } from '../../../../components/tag/tag.component';
import { NgOptimizedImage } from '@angular/common';

/**
 * Displays the "about" text with an image
 */
@Component({
    selector: 'every-about',
    imports: [TagComponent, NgOptimizedImage],
    templateUrl: './about.component.html'
})
export class AboutComponent {}
