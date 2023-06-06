import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpidemieListComponent } from './epidemie-list/epidemie-list.component';
import { EpidemieAddComponent } from './epidemie-add/epidemie-add.component';
import { EpidemieEditComponent } from './epidemie-edit/epidemie-edit.component';
import { EpidemieViewComponent } from './epidemie-view/epidemie-view.component';

const routes: Routes = [
  { path: 'epidemie-list', component: EpidemieListComponent },
  { path: 'epidemie-add', component: EpidemieAddComponent },
  { path: 'epidemie-edit/:id', component: EpidemieEditComponent },
  { path: 'epidemie-view/:id', component: EpidemieViewComponent },

  { path: '', redirectTo: 'epidemie-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpidemiesRoutingModule { }
