import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '@demo-testing-app/shared';

@Component({
  selector: 'lib-user-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() props!: IUser;
}
