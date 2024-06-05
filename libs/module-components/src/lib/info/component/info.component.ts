import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InfoComponentProps } from '@demo-testing-app/shared';

@Component({
  selector: 'module-lib-info-component',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {
  @Input() props!: InfoComponentProps;
}
