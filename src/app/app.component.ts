import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserContainer } from '@demo-testing-app/standalone-components';

@Component({
  standalone: true,
  imports: [RouterModule, UserContainer],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo-testing-app';
}
