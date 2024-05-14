import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as StoreActions from './store.actions';
import { StoreEffects } from './store.effects';

describe('StoreEffects', () => {
  let actions: Observable<Action>;
  let effects: StoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        StoreEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(StoreEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: StoreActions.initStore() });

      const expected = hot('-a-|', {
        a: StoreActions.loadStoreSuccess({ store: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
