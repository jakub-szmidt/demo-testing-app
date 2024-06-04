import { IUser } from '../models/user.model';
import { createAction, props } from '@ngrx/store';

export const addUser = createAction('ADD USER', props<{ user: IUser }>());

export const removeUser = createAction(
  'REMOVE USER',
  props<{ userId: number }>(),
);

export const removeLastUser = createAction('REMOVE LAST USER');

export const navigateToRootPage = createAction('NAVIGATE TO ROOT PAGE');

export const navigateToInfoPage = createAction('NAVIGATE TO INFO PAGE');

export const setInfoTextToDisplay = createAction(
  'SET INFO TEXT TO DISPLAY',
  props<{ textToDisplay: string }>(),
);
