import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponentProps } from '@demo-testing-app/shared';
import { UserContainer } from '../../user/container/user.container';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'lib-user-list-component',
  standalone: true,
  imports: [CommonModule, UserContainer, MatButtonModule, MatCardModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input() props!: UserListComponentProps;
}
