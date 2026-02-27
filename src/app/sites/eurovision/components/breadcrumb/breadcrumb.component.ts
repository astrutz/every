import { Component, inject, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';

/**
 * Displays a breadcrumb to navigate through the eurovision page
 */
@Component({
  selector: 'eurovision-breadcrumb',
  templateUrl: 'breadcrumb.component.html',
  imports: [NgClass, RouterLink],
})
export class BreadcrumbComponent {
  protected readonly breadcrumbService: BreadcrumbService = inject(BreadcrumbService);

  @Input()
  textColor: string | null = null;
}
