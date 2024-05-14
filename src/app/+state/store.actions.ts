import { createAction, props } from '@ngrx/store';
import { StoreEntity } from './store.models';

export const initStore = createAction('[Store Page] Init');

export const loadStoreSuccess = createAction(
  '[Store/API] Load Store Success',
  props<{ store: StoreEntity[] }>(),
);

export const loadStoreFailure = createAction(
  '[Store/API] Load Store Failure',
  props<{ error: any }>(),
);
