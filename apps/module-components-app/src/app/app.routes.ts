import { Route } from '@angular/router';
import { ROOT_ROUTE, INFO_ROUTE } from '@demo-testing-app/shared';
import {
  InfoContainer,
  UserListContainer,
} from '@demo-testing-app/module-components';

export const appRoutes: Route[] = [
  { path: ROOT_ROUTE, component: UserListContainer },
  { path: INFO_ROUTE, component: InfoContainer },
];
