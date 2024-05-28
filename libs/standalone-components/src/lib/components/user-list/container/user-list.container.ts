import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../component/user-list.component';
import { UserListContainerProps, UsersService } from '@demo-testing-app/shared';

@Component({
  selector: 'lib-user-list-container',
  standalone: true,
  imports: [CommonModule, UserListComponent],
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
