import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CapitalizePipe,
  HighlightDirective,
  IUser,
  SharedModule,
} from '@demo-testing-app/shared';

@Component({
  selector: 'lib-user-component',
  standalone: true,
  imports: [CommonModule, CapitalizePipe, SharedModule, HighlightDirective],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input() user!: IUser;
}