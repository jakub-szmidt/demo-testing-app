import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/component/user.component';
import { UserContainer } from './user/container/user.container';
import { UserListContainer } from './user-list/container/user-list.container';
import { UserListComponent } from './user-list/component/user-list.component';
import {
  CapitalizePipe,
  HighlightDirective,
  SharedModule,
} from '@demo-testing-app/shared';
import { InfoComponent } from './info/component/info.component';
import { InfoContainer } from './info/container/info.container';

@NgModule({
  imports: [CommonModule, CapitalizePipe, SharedModule, HighlightDirective],
  declarations: [
    UserComponent,
    UserContainer,
    UserListContainer,
    UserListComponent,
    InfoComponent,
    InfoContainer,
  ],
})
export class ModuleComponentsModule {}
