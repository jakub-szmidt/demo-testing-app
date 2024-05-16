import { Injectable } from '@angular/core';
import { StoreRootModel } from '../../store/store.models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from '../../models/user.model';
import * as StoreSelectors from '../../store/store.selectors';
import * as StoreActions from '../../store/store.actions';
import { generateRandomUser } from '../../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private store: Store<StoreRootModel>) {}

  getUsers(): Observable<IUser[]> {
    return this.store.select(StoreSelectors.selectUsers);
  }

  addUser(user: IUser): void {
    this.store.dispatch(StoreActions.addUser({ user }));
  }

  removeUser(userId: number): void {
    this.store.dispatch(StoreActions.removeUser({ userId }));
  }

  addRandomUser(): void {
    const randomUser = generateRandomUser();
    this.store.dispatch(StoreActions.addUser({ user: randomUser }));
  }

  removeLastUser(): void {
    this.store.dispatch(StoreActions.removeLastUser());
  }
}
