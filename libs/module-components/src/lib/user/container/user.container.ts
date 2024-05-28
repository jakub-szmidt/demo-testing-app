import { Component, Input } from '@angular/core';
import { IUser } from '@demo-testing-app/shared';

@Component({
  selector: 'module-lib-user-container',
  templateUrl: './user.container.html',
  styleUrl: './user.container.scss',
})
export class UserContainer {
  @Input() user!: IUser;
}
