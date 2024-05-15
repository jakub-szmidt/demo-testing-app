import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser, addUser, selectUsers, StoreRootModel, generateRandomString } from '@demo-testing-app/shared';
import { UserListComponent, UserListComponentProps } from '../component/user-list.component';
import { Store } from '@ngrx/store';
import { distinctUntilChanged } from 'rxjs';

export interface UserListContainerProps {
  componentProps$: UserListComponentProps;
}

@Component({
  selector: 'lib-user-list-container',
  standalone: true,
  imports: [CommonModule, UserListComponent],
  templateUrl: './user-list.container.html',
  styleUrl: './user-list.container.scss',
})
export class UserListContainer {
  props: UserListContainerProps;

  constructor(private store: Store<StoreRootModel>) {
    this.props = { 
      componentProps$: {
        users$: this.store.select(selectUsers),
        onAddClick: (): void => this.store.dispatch(addUser())
      }
    }
  }

  private generateRandomUser(): IUser {
    let maxId: number;
    this.store.select(selectUsers).pipe(distinctUntilChanged()).subscribe((users) => maxId = Math.max(users.map(user => user.id)));

    const id = Math.random();
    const name = generateRandomString();
    const lastName = generateRandomString();
    const email = `${name}_${lastName}@email.com`;

    return {
      id,
      name,
      lastName,
      email,
    }
  }
}
