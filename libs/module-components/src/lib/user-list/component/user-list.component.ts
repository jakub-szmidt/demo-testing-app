import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserListComponentProps } from '@demo-testing-app/shared';

@Component({
  selector: 'module-lib-user-list-component',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input() props!: UserListComponentProps;
}
