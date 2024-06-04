import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { StoreEffects, StoreReducer } from '@demo-testing-app/shared';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideState(StoreReducer.STORE_FEATURE_KEY, StoreReducer.reducer),
    provideEffects([StoreEffects]),
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideRouter(appRoutes),
    provideHttpClient(),
  ],
};
