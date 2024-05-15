import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../component/user.component';
import { IUser } from '@demo-testing-app/shared';

@Component({
  selector: 'lib-user-container',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './user.container.html',
  styleUrl: './user.container.scss',
})
export class UserContainer {
  @Input() user!: IUser;
}
