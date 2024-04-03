import { Component } from '@angular/core';
import { TagComponent } from '../../../../components/tag/tag.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'every-about',
  standalone: true,
  imports: [TagComponent, NgOptimizedImage],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
