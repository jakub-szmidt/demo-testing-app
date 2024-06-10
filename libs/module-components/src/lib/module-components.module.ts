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
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    CapitalizePipe,
    SharedModule,
    HighlightDirective,
    MatButtonModule,
    MatCardModule,
  ],
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
