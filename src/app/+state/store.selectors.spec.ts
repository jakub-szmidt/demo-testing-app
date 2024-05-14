import { StoreEntity } from './store.models';
import {
  storeAdapter,
  StorePartialState,
  initialStoreState,
} from './store.reducer';
import * as StoreSelectors from './store.selectors';

describe('Store Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getStoreId = (it: StoreEntity) => it.id;
  const createStoreEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    }) as StoreEntity;

  let state: StorePartialState;

  beforeEach(() => {
    state = {
      store: storeAdapter.setAll(
        [
          createStoreEntity('PRODUCT-AAA'),
          createStoreEntity('PRODUCT-BBB'),
          createStoreEntity('PRODUCT-CCC'),
        ],
        {
          ...initialStoreState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        },
      ),
    };
  });

  describe('Store Selectors', () => {
    it('selectAllStore() should return the list of Store', () => {
      const results = StoreSelectors.selectAllStore(state);
      const selId = getStoreId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = StoreSelectors.selectEntity(state) as StoreEntity;
      const selId = getStoreId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectStoreLoaded() should return the current "loaded" status', () => {
      const result = StoreSelectors.selectStoreLoaded(state);

      expect(result).toBe(true);
    });

    it('selectStoreError() should return the current "error" state', () => {
      const result = StoreSelectors.selectStoreError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
