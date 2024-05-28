import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/component/user.component';
import { UserContainer } from './user/container/user.container';
import { UserListContainer } from './user-list/container/user-list.container';
import { UserListComponent } from './user-list/component/user-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UserComponent,
    UserContainer,
    UserListContainer,
    UserListComponent,
  ],
})
export class ModuleComponentsModule {}
