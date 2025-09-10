import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'every-breadcrumb',
  templateUrl: 'breadcrumb.component.html',
  standalone: true,
  imports: [NgClass, RouterLink],
})
export class BreadcrumbComponent {
  protected breadcrumbService: BreadcrumbService = inject(BreadcrumbService);
}
