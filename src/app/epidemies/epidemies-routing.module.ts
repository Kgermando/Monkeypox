import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpidemieListComponent } from './epidemie-list/epidemie-list.component';
import { EpidemieAddComponent } from './epidemie-add/epidemie-add.component';
import { EpidemieEditComponent } from './epidemie-edit/epidemie-edit.component';
import { EpidemieViewComponent } from './epidemie-view/epidemie-view.component';

const routes: Routes = [
  { path: 'epidemie-list', component: EpidemieListComponent },
  { path: 'epidemie-add', component: EpidemieAddComponent },
  { path: ':id/epidemie-edit', component: EpidemieEditComponent },
  { path: ':id/epidemie-view', component: EpidemieViewComponent },

  { path: '', redirectTo: 'epidemie-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpidemiesRoutingModule { }
