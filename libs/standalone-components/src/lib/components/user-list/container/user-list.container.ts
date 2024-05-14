import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-user-list-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.container.html',
  styleUrl: './user-list.container.scss',
})
export class UserListContainer {}
