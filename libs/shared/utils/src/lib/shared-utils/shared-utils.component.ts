import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'shared-utils-cmp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-utils.component.html',
  styleUrl: './shared-utils.component.css',
})
export class SharedUtilsComponent {}
