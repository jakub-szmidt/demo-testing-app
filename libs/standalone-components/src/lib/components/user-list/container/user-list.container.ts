import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UserListComponent,
  UserListComponentProps,
} from '../component/user-list.component';
import { UsersService } from '@demo-testing-app/shared';

export interface UserListContainerProps {
  componentProps: UserListComponentProps;
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

  constructor(private usersService: UsersService) {
    this.props = {
      componentProps: {
        users$: this.usersService.getUsers(),
        onAddClick: (): void => this.usersService.addRandomUser(),
        onRemoveClick: (): void => this.usersService.removeLastUser(),
      },
    };
  }
}
