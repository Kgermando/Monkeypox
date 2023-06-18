import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CampaignModel } from '../../models/campaign-model'; 
import { CampaignService } from '../campaign.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent {
  displayedColumns: string[] = ['nom', 'date_debut', 'date_fin', 'nbre_agent', 'signature', 'created', 'edit', 'delete'];

  ELEMENT_DATA: CampaignModel[] = [];

  isLoading = false;

  dataSource: MatTableDataSource<CampaignModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private campaignService: CampaignService,
    private router: Router,
    private _snackBar: MatSnackBar) {}

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

 


  delete(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet element ?')) {
      this.campaignService.delete(id).subscribe(() => {  
        this.router.navigate(['/layouts/reglages/campaign-list']); 
        this._snackBar.open("Cet élement a été supprimé!", "ok");
      });
    }
  }
}
