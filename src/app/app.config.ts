import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { StoreReducer } from '@demo-testing-app/shared';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideEffects(StoreEffects),
    provideStore(),
    provideState(StoreReducer.STORE_FEATURE_KEY, StoreReducer.reducer),
    provideEffects(),
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideRouter(appRoutes),
  ],
};
