import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFastSVG } from '@push-based/ngx-fast-svg';

import { routes } from './app.routes';
import { readAccessInterceptor } from './read-access.interceptor';
import { ENVIRONMENT_TOKEN } from './shared/env.token';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ENVIRONMENT_TOKEN, useValue: environment },
    provideHttpClient(withInterceptors([readAccessInterceptor])),
    provideRouter(routes),
    provideFastSVG({
      url: (name: string) => `assets/svg-icons/${name}.svg`,
      defaultSize: '12',
    }),
  ],
};
