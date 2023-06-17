import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ReglageRoutingModule } from './reglage-routing.module';
import { StructureListComponent } from './structures/structure-list/structure-list.component';
import { StructureAddComponent } from './structures/structure-add/structure-add.component';
import { StructureEditComponent } from './structures/structure-edit/structure-edit.component';
import { ZoneSanteListComponent } from './zone-santes/zone-sante-list/zone-sante-list.component';
import { ZoneSanteAddComponent } from './zone-santes/zone-sante-add/zone-sante-add.component';
import { ZoneSanteEditComponent } from './zone-santes/zone-sante-edit/zone-sante-edit.component';
import { CampaignListComponent } from './campaigns/campaign-list/campaign-list.component';
import { CampaignAddComponent } from './campaigns/campaign-add/campaign-add.component';
import { CampaignEditComponent } from './campaigns/campaign-edit/campaign-edit.component';
import { CampaignViewComponent } from './campaigns/campaign-view/campaign-view.component';
import { ZoneSanteViewComponent } from './zone-santes/zone-sante-view/zone-sante-view.component';
import { StructureViewComponent } from './structures/structure-view/structure-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StructureListComponent,
    StructureAddComponent,
    StructureEditComponent,
    ZoneSanteListComponent,
    ZoneSanteAddComponent,
    ZoneSanteEditComponent,
    CampaignListComponent,
    CampaignAddComponent,
    CampaignEditComponent,
    CampaignViewComponent,
    ZoneSanteViewComponent,
    StructureViewComponent
  ],
  imports: [
    CommonModule,
    ReglageRoutingModule,

    SharedModule
  ],
  providers: [
    DatePipe
  ]
})
export class ReglageModule { }
