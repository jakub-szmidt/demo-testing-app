import { Route } from '@angular/router';
import {
  InfoContainer,
  UserListContainer,
} from '@demo-testing-app/standalone-components';

export const appRoutes: Route[] = [
  { path: '', component: UserListContainer },
  { path: 'info', component: InfoContainer },
];
