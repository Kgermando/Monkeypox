import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignListComponent } from './campaigns/campaign-list/campaign-list.component';
import { CampaignAddComponent } from './campaigns/campaign-add/campaign-add.component';
import { CampaignEditComponent } from './campaigns/campaign-edit/campaign-edit.component';
import { CampaignViewComponent } from './campaigns/campaign-view/campaign-view.component';
import { StructureListComponent } from './structures/structure-list/structure-list.component';
import { StructureAddComponent } from './structures/structure-add/structure-add.component';
import { StructureEditComponent } from './structures/structure-edit/structure-edit.component';
import { StructureViewComponent } from './structures/structure-view/structure-view.component';
import { ZoneSanteListComponent } from './zone-santes/zone-sante-list/zone-sante-list.component';
import { ZoneSanteAddComponent } from './zone-santes/zone-sante-add/zone-sante-add.component';
import { ZoneSanteEditComponent } from './zone-santes/zone-sante-edit/zone-sante-edit.component';
import { ZoneSanteViewComponent } from './zone-santes/zone-sante-view/zone-sante-view.component';

const routes: Routes = [
  { path: 'campaign-list', component: CampaignListComponent }, 
  { path: 'campaign-add', component: CampaignAddComponent },
  { path: ':id/campaign-edit', component: CampaignEditComponent },
  { path: ':id/campaign-view', component: CampaignViewComponent },

  { path: 'structure-list', component: StructureListComponent },
  { path: 'structure-add', component: StructureAddComponent },
  { path: ':id/structure-edit', component: StructureEditComponent },
  { path: ':id/structure-view', component: StructureViewComponent },

  { path: 'zone-sante-list', component: ZoneSanteListComponent },
  { path: 'zone-sante-add', component: ZoneSanteAddComponent },
  { path: ':id/zone-sante-edit', component: ZoneSanteEditComponent },
  { path: ':id/zone-sante-view', component: ZoneSanteViewComponent },

  { path: '', redirectTo: 'campaign-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReglageRoutingModule { }
