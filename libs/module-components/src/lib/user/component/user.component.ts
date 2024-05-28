import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser } from '@demo-testing-app/shared';

@Component({
  selector: 'module-lib-user-component',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input() user!: IUser;
}
