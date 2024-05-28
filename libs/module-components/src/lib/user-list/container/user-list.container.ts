import { Component, OnInit } from '@angular/core';
import { UserListContainerProps, UsersService } from '@demo-testing-app/shared';

@Component({
  selector: 'module-lib-user-list-container',
  templateUrl: './user-list.container.html',
  styleUrl: './user-list.container.scss',
})
export class UserListContainer implements OnInit {
  props!: UserListContainerProps;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.props = {
      componentProps: {
        users$: this.usersService.getUsers(),
        onAddClick: (): void => this.usersService.addRandomUser(),
        onRemoveClick: (): void => this.usersService.removeLastUser(),
      },
    };
  }
}
