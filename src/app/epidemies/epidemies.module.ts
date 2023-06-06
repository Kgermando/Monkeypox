import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpidemiesRoutingModule } from './epidemies-routing.module';
import { EpidemieListComponent } from './epidemie-list/epidemie-list.component';
import { EpidemieAddComponent } from './epidemie-add/epidemie-add.component';
import { EpidemieViewComponent } from './epidemie-view/epidemie-view.component';
import { EpidemieEditComponent } from './epidemie-edit/epidemie-edit.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EpidemieListComponent,
    EpidemieAddComponent,
    EpidemieViewComponent,
    EpidemieEditComponent
  ],
  imports: [
    CommonModule,
    EpidemiesRoutingModule,

    SharedModule,
  ]
})
export class EpidemiesModule { }
