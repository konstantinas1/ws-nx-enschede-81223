import { Component } from '@angular/core';
import { FastSvgComponent } from '@push-based/ngx-fast-svg';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  standalone: true,
  imports: [FastSvgComponent],
})
export class NotFoundPageComponent {}
