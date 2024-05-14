import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-standalone-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-components.component.html',
  styleUrl: './standalone-components.component.scss',
})
export class StandaloneComponentsComponent {}
