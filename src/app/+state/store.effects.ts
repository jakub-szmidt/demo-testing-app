import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as StoreActions from './store.actions';
import * as StoreFeature from './store.reducer';

@Injectable()
export class StoreEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.initStore),
      switchMap(() => of(StoreActions.loadStoreSuccess({ store: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(StoreActions.loadStoreFailure({ error }));
      }),
    ),
  );
}
