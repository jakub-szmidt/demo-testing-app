import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '@demo-testing-app/shared';
import { UserContainer } from '../../user/container/user.container';
import { Observable } from 'rxjs';

export interface UserListComponentProps {
  users$: Observable<IUser[]>;
  onAddClick: () => void;
  onRemoveClick: (userId: number) => void;
}

@Component({
  selector: 'lib-user-list-component',
  standalone: true,
  imports: [CommonModule, UserContainer],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input() props!: UserListComponentProps;
}
