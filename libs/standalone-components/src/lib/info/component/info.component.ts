import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponentProps } from '@demo-testing-app/shared';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-info-component',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {
  @Input() props!: InfoComponentProps;
}
