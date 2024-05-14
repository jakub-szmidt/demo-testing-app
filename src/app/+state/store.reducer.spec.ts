import { Action } from '@ngrx/store';

import * as StoreActions from './store.actions';
import { StoreEntity } from './store.models';
import { StoreState, initialStoreState, storeReducer } from './store.reducer';

describe('Store Reducer', () => {
  const createStoreEntity = (id: string, name = ''): StoreEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Store actions', () => {
    it('loadStoreSuccess should return the list of known Store', () => {
      const store = [
        createStoreEntity('PRODUCT-AAA'),
        createStoreEntity('PRODUCT-zzz'),
      ];
      const action = StoreActions.loadStoreSuccess({ store });

      const result: StoreState = storeReducer(initialStoreState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = storeReducer(initialStoreState, action);

      expect(result).toBe(initialStoreState);
    });
  });
});
