import { Component, OnInit } from '@angular/core';
import {
  StoreActions,
  UserListContainerProps,
  UsersService,
} from '@demo-testing-app/shared';
import { Store } from '@ngrx/store';

@Component({
  selector: 'module-lib-user-list-container',
  templateUrl: './user-list.container.html',
  styleUrl: './user-list.container.scss',
})
export class UserListContainer implements OnInit {
  props!: UserListContainerProps;

  constructor(
    private usersService: UsersService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.props = {
      componentProps: {
        users$: this.usersService.getUsers(),
        onAddClick: (): void => this.usersService.addRandomUser(),
        onRemoveClick: (): void => this.usersService.removeLastUser(),
        onInfoClick: (): void =>
          this.store.dispatch(StoreActions.navigateToInfoPage()),
      },
    };
  }
}
