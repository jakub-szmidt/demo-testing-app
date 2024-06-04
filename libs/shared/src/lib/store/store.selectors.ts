import { createFeatureSelector, createSelector } from '@ngrx/store';
import { STORE_FEATURE_KEY } from './store.reducer';
import { StoreRootModel } from './store.models';

// Lookup the 'Store' feature state managed by NgRx
export const selectStoreState =
  createFeatureSelector<StoreRootModel>(STORE_FEATURE_KEY);

export const selectUsers = createSelector(
  selectStoreState,
  (state: StoreRootModel) => state.users,
);

export const selectInfoTextToDisplay = createSelector(
  selectStoreState,
  (state: StoreRootModel) => state.infoTextToDisplay,
);
