import { InjectionToken } from '@angular/core';

export interface Environment {
  production: boolean;
  tmdbBaseUrl: string;
  apiV3: string;
  apiV4: string;
  tmdbApiKey: string;
  tmdbApiReadAccessKey: string;
}

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('environment');
