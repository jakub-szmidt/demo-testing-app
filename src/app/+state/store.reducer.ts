import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as StoreActions from './store.actions';
import { StoreEntity } from './store.models';

export const STORE_FEATURE_KEY = 'store';

export interface StoreState extends EntityState<StoreEntity> {
  selectedId?: string | number; // which Store record has been selected
  loaded: boolean; // has the Store list been loaded
  error?: string | null; // last known error (if any)
}

export interface StorePartialState {
  readonly [STORE_FEATURE_KEY]: StoreState;
}

export const storeAdapter: EntityAdapter<StoreEntity> =
  createEntityAdapter<StoreEntity>();

export const initialStoreState: StoreState = storeAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialStoreState,
  on(StoreActions.initStore, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(StoreActions.loadStoreSuccess, (state, { store }) =>
    storeAdapter.setAll(store, { ...state, loaded: true }),
  ),
  on(StoreActions.loadStoreFailure, (state, { error }) => ({
    ...state,
    error,
  })),
);

export function storeReducer(state: StoreState | undefined, action: Action) {
  return reducer(state, action);
}
