import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ENVIRONMENT_TOKEN } from './shared/env.token';

export const readAccessInterceptor: HttpInterceptorFn = (req, next) => {
  const env = inject(ENVIRONMENT_TOKEN);
  const key = env.tmdbApiReadAccessKey;

  return next(
    req.clone({
      headers: new HttpHeaders({ Authorization: `Bearer ${key}` }),
    })
  );
};
