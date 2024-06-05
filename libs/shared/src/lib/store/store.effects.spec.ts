import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { StoreEffects } from './store.effects';
import { Action } from '@ngrx/store';
import { InfoService } from '../providers/info/info.service';
import {
  navigateToInfoPage,
  navigateToRootPage,
  setInfoTextToDisplay,
} from './store.actions';
import { InfoResponse } from '../models/info.response';
import { Router, provideRouter } from '@angular/router';
import { INFO_ROUTE, ROOT_ROUTE } from '../routes/app.routes';

const mockInfoService = {
  getInfo: jest.fn(),
};

describe('StoreEffects', () => {
  let actions$: Observable<Action>;
  let effects: StoreEffects;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StoreEffects,
        provideRouter([]),
        provideMockActions(() => actions$),
        { provide: InfoService, useValue: mockInfoService },
      ],
    });

    effects = TestBed.inject(StoreEffects);
    router = TestBed.inject(Router);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadInfoPage$', () => {
    it('should return SET INFO TEXT TO DISPLAY with text on success', (done) => {
      const mockResponse: InfoResponse = {
        textToDisplay: 'mocked info text',
      };
      mockInfoService.getInfo.mockReturnValue(of(mockResponse));

      actions$ = of(navigateToInfoPage());

      effects.loadInfoPage$.subscribe((action) => {
        expect(action).toEqual(
          setInfoTextToDisplay({ textToDisplay: mockResponse.textToDisplay }),
        );
        done();
      });
    });

    it('should return SET INFO TEXT TO DISPLAY with error on failure', (done) => {
      mockInfoService.getInfo.mockReturnValue(
        throwError(() => new Error('some error')),
      );

      actions$ = of(navigateToInfoPage());

      effects.loadInfoPage$.subscribe((action) => {
        expect(action).toEqual(
          setInfoTextToDisplay({ textToDisplay: 'error' }),
        );
        done();
      });
    });

    it('should navigate to info page', () => {
      jest.spyOn(router, 'navigate');

      actions$ = of(navigateToInfoPage());
      effects.loadInfoPage$.subscribe();

      expect(router.navigate).toHaveBeenCalledWith([INFO_ROUTE]);
    });
  });

  describe('loadRootPage$', () => {
    it('should navigate to root page', () => {
      jest.spyOn(router, 'navigate');

      actions$ = of(navigateToRootPage());
      effects.loadRootPage$.subscribe();

      expect(router.navigate).toHaveBeenCalledWith([ROOT_ROUTE]);
    });
  });
});
