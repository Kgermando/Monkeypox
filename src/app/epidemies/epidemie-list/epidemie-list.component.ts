import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EpidemieService } from '../epidemie.service';
import { Router } from '@angular/router';
import { EpidemieModel } from '../models/epidemie-model';
import { MetaModel } from 'src/app/shared/models/meta-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-epidemie-list',
  templateUrl: './epidemie-list.component.html',
  styleUrls: ['./epidemie-list.component.scss']
})
export class EpidemieListComponent implements AfterViewInit {
  displayedColumns: string[] = ['statut', 'num_epi', 'semaine_epi', 'date_notification', 'patient_id', 'fievre', 'eruption_cutanee', 'date_symptome', 'date_admition', 'date_diagonstic', 'a_ete_contact_patient', 'type_contact', 'a_ete_hospitalise', 'croute', 'ecouvillon', 'prevelement_sanguin', 'date_prelevement', 'date_expedition'];

  
    ELEMENT_DATA: EpidemieModel[] = []; 
    dataSource: MatTableDataSource<EpidemieModel>;

    @ViewChild(MatPaginator) paginator: MatPaginator; 

    isLoading = false; 

    constructor(
        private epidemieService: EpidemieService,
        private router: Router) {}


        ngAfterViewInit() {
          this.isLoading = true;
          this.epidemieService.all().subscribe({
            next: res => {
              this.ELEMENT_DATA = res; 
              this.dataSource = new MatTableDataSource<EpidemieModel>(this.ELEMENT_DATA);
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
        this.router.navigate(['/epidemies/epidemie-edit', id]);
      }
    
      removeItem(id: number){
        this.epidemieService.delete(id);
      }
    
}
