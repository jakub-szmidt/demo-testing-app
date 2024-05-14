import { createFeatureSelector, createSelector } from '@ngrx/store';
import { STORE_FEATURE_KEY, StoreState, storeAdapter } from './store.reducer';

// Lookup the 'Store' feature state managed by NgRx
export const selectStoreState =
  createFeatureSelector<StoreState>(STORE_FEATURE_KEY);

const { selectAll, selectEntities } = storeAdapter.getSelectors();

export const selectStoreLoaded = createSelector(
  selectStoreState,
  (state: StoreState) => state.loaded,
);

export const selectStoreError = createSelector(
  selectStoreState,
  (state: StoreState) => state.error,
);

export const selectAllStore = createSelector(
  selectStoreState,
  (state: StoreState) => selectAll(state),
);

export const selectStoreEntities = createSelector(
  selectStoreState,
  (state: StoreState) => selectEntities(state),
);

export const selectSelectedId = createSelector(
  selectStoreState,
  (state: StoreState) => state.selectedId,
);

export const selectEntity = createSelector(
  selectStoreEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined),
);
