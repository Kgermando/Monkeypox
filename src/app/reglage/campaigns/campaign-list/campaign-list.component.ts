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

  isLoading = false;

  dataSource: MatTableDataSource<CampaignModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private campaignService: CampaignService,
    private router: Router) {}

  ngAfterViewInit() {
    this.isLoading = true;
    this.campaignService.all().subscribe({
      next: res => {
        this.ELEMENT_DATA = res;

        this.dataSource = new MatTableDataSource<CampaignModel>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
      }
    });
    this.isLoading = false;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editItem(id: number){
    this.router.navigate(['/reglages/campaign-edit', id]);
  }


  removeItem(id: number){
    this.campaignService.delete(id);
  }
}
