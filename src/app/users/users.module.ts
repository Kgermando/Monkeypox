import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UsersService } from './users.service';
import { SharedModule } from '../shared/shared.module';
import { UserActivityComponent } from './user-view/user-activity/user-activity.component';
import { UserInfoComponent } from './user-view/user-info/user-info.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserViewComponent,
    UserEditComponent,
    UserAddComponent,
    UserActivityComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,

    SharedModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
