import { Action } from '@ngrx/store';
import { reducer } from './store.reducer';
import { initialStoreState } from './store.models';
import * as StoreActions from './store.actions';
import { IUser } from '../models/user.model';

describe('store reducer', () => {
  it('should return initial state if the action is unknown', () => {
    const action: Action = { type: 'Unknown' };
    const state = reducer(initialStoreState, action);

    expect(state).toBe(initialStoreState);
  });

  describe('addUser action', function () {
    it('should add new user', () => {
      const user: IUser = {
        id: 2,
        name: 'name',
        lastName: 'last name',
        email: 'email@email.com',
      };

      const action = StoreActions.addUser({ user });
      const state = reducer(initialStoreState, action);

      expect(state.users.length).toEqual(1);
      expect(state.users[0]).toBe(user);
    });
  });

  describe('removeLastUser action', function () {
    it('should remove last user', () => {
      const users: IUser[] = [
        {
          id: 1,
          name: 'name',
          lastName: 'last name',
          email: 'email@email.com',
        },
        {
          id: 2,
          name: 'name',
          lastName: 'last name',
          email: 'email@email.com',
        },
      ];

      const newInitialState = { ...initialStoreState, users };
      const action = StoreActions.removeLastUser();
      const state = reducer(newInitialState, action);

      expect(state.users.length).toEqual(1);
      expect(state.users[0]).toBe(users[0]);
    });
  });

  describe('removeUser action', () => {
    it('should remove user with id', () => {
      const user: IUser = {
        id: 1,
        name: 'name',
        lastName: 'last name',
        email: 'email@email.com',
      };

      const newInitialState = { ...initialStoreState, users: [user] };
      const action = StoreActions.removeUser({ userId: user.id });
      const state = reducer(newInitialState, action);

      expect(state.users.length).toEqual(0);
      expect(state.users).not.toContain(user);
    });
  });
});
