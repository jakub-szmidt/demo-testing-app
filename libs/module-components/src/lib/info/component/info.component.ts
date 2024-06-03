import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'module-lib-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {}
