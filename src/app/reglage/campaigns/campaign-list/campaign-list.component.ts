import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CampaignModel } from '../../models/campaign-model';
import { MetaModel } from 'src/app/shared/models/meta-model';
import { CampaignService } from '../campaign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent {
  displayedColumns: string[] = ['nom', 'date_debut', 'date_fin', 'aire_sante', 'nbre_agent', 'signature', 'created', 'edit', 'delete'];

  ELEMENT_DATA: CampaignModel[] = [];

  metaData: any = [];

  pageMeta: MetaModel;


  // dataSource = new MatTableDataSource<StructureModel>(this.ELEMENT_DATA);
  dataSource: MatTableDataSource<CampaignModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private campaignService: CampaignService,
    private router: Router) {}

  ngAfterViewInit() {
    this.campaignService.getList().subscribe(res => {
      this.metaData = res;

      this.ELEMENT_DATA = this.metaData['data'];
      this.pageMeta = this.metaData['meta'];

      console.log(this.pageMeta);
      console.log(this.ELEMENT_DATA); 
      this.dataSource = new MatTableDataSource<CampaignModel>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })

  }

  ngOnInit(): void {}

  editItem(id: number){
    this.router.navigate(['/reglages/campaign-add', id]);
  }


  removeItem(id: number){
    this.campaignService.deleteData(id);
  }
}
