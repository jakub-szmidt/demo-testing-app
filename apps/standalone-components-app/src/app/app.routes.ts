import { Route } from '@angular/router';
import { INFO_ROUTE, ROOT_ROUTE } from '@demo-testing-app/shared';
import {
  InfoContainer,
  UserListContainer,
} from '@demo-testing-app/standalone-components';

export const appRoutes: Route[] = [
  { path: ROOT_ROUTE, component: UserListContainer },
  { path: INFO_ROUTE, component: InfoContainer },
];
