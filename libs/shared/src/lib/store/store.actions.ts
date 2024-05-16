import { IUser } from '../models/user.model';
import { createAction, props } from '@ngrx/store';

export const addUser = createAction('ADD USER', props<{ user: IUser }>());

export const removeUser = createAction(
  'REMOVE USER',
  props<{ userId: number }>(),
);

export const removeLastUser = createAction('REMOVE LAST USER');
