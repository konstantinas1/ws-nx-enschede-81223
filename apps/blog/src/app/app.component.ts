import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUtilsComponent } from '@ws-nx-enschede-81223/shared/utils';

@Component({
  standalone: true,
  imports: [RouterModule, SharedUtilsComponent],
  selector: 'ws-nx-enschede-81223-root',
  template: `
    <h1>Welcome blog</h1>

    <shared-utils-cmp></shared-utils-cmp>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
