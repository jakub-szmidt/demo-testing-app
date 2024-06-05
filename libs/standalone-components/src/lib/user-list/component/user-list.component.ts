import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponentProps } from '@demo-testing-app/shared';
import { UserContainer } from '../../user/container/user.container';

@Component({
  selector: 'lib-user-list-component',
  standalone: true,
  imports: [CommonModule, UserContainer],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input() props!: UserListComponentProps;
}
