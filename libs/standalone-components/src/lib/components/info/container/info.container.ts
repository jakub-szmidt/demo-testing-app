import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from '../component/info.component';

@Component({
  selector: 'lib-info-container',
  standalone: true,
  imports: [CommonModule, InfoComponent],
  templateUrl: './info.container.html',
  styleUrl: './info.container.scss',
})
export class InfoContainer {}
