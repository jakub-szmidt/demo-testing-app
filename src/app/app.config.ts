import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as fromStore from './+state/store.reducer';
import { StoreEffects } from './+state/store.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(StoreEffects),
    provideState(fromStore.STORE_FEATURE_KEY, fromStore.storeReducer),
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideEffects(),
    provideStore(),
    provideRouter(appRoutes),
  ],
};
