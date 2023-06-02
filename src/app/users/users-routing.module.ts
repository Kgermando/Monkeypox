import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {
    path: 'user-list', component: UserListComponent
  },
  {
    path: 'user-add', component: UserAddComponent
  },
  {
    path: 'user-view/:id', component: UserViewComponent
  },
  {
    path: 'user-edit/:id', component: UserEditComponent
  },
  { path: '', redirectTo: 'user-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
