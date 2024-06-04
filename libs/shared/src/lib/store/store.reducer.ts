import { createReducer, on, ActionReducer } from '@ngrx/store';
import { StoreRootModel, initialStoreState } from './store.models';
import * as StoreActions from './store.actions';

export const STORE_FEATURE_KEY = 'store';

export const reducer: ActionReducer<StoreRootModel> = createReducer(
  initialStoreState,
  on(
    StoreActions.addUser,
    (state, action): StoreRootModel => ({
      ...state,
      users: [...state.users, action.user],
    }),
  ),
  on(
    StoreActions.removeUser,
    (state, action): StoreRootModel => ({
      ...state,
      users: state.users.filter((user) => user.id !== action.userId),
    }),
  ),
  on(
    StoreActions.removeLastUser,
    (state): StoreRootModel => ({
      ...state,
      users: state.users.slice(0, -1),
    }),
  ),
  on(
    StoreActions.setInfoTextToDisplay,
    (state, action): StoreRootModel => ({
      ...state,
      infoTextToDisplay: action.textToDisplay,
    }),
  ),
);
