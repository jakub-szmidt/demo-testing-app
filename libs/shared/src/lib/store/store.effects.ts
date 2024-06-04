import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { InfoService } from '../providers/info/info.service';
import {
  navigateToInfoPage,
  navigateToRootPage,
  setInfoTextToDisplay,
} from './store.actions';
import { map, switchMap, tap } from 'rxjs';
import { INFO_ROUTE, ROOT_ROUTE } from '../routes/app.routes';

@Injectable()
export class StoreEffects {
  constructor(
    private actions$: Actions,
    private infoService: InfoService,
    private router: Router,
  ) {}

  loadInfoPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(navigateToInfoPage),
      switchMap(() =>
        this.infoService
          .getInfo()
          .pipe(
            map((response) =>
              setInfoTextToDisplay({ textToDisplay: response.textToDisplay }),
            ),
          ),
      ),
      tap(() => this.router.navigate([INFO_ROUTE])),
    );
  });

  loadRootPage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(navigateToRootPage),
        switchMap(() => this.router.navigate([ROOT_ROUTE])),
      );
    },
    {
      dispatch: false,
    },
  );
}
