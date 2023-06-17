import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent,
  },
  {
    path: 'user-list', component: UserListComponent
  },
  {
    path: 'user-add', component: UserAddComponent
  },
  {
    path: ':id/view', component: UserViewComponent
  },
  {
    path: ':id/edit', component: UserEditComponent
  },
  { path: '', redirectTo: 'user-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
