import { Component } from '@angular/core';
import { TagComponent } from '../../../../components/tag/tag.component';

@Component({
  selector: 'every-about',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
