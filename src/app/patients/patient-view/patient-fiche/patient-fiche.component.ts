import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EpidemieService } from 'src/app/epidemies/epidemie.service';
import { EpidemieModel } from 'src/app/epidemies/models/epidemie-model';
import { MetaModel } from 'src/app/shared/models/meta-model';
import { PatientModel } from '../../models/patient-model';

@Component({
  selector: 'app-patient-fiche',
  templateUrl: './patient-fiche.component.html',
  styleUrls: ['./patient-fiche.component.scss']
})
export class PatientFicheComponent {
    @Input() patient: PatientModel;

    displayedColumns: string[] = ['statut', 'num_epi', 'semaine_epi', 'date_notification', 'fievre', 'eruption_cutanee', 'date_symptome', 'date_admition', 'date_diagonstic', 'a_ete_contact_patient', 'type_contact', 'a_ete_hospitalise', 'croute', 'ecouvillon', 'prevelement_sanguin', 'date_prelevement', 'date_expedition'];

  
    ELEMENT_DATA: EpidemieModel[] = [];
    ELEMENT_DATA_FILTER: EpidemieModel[] = [];
   
    dataSource: MatTableDataSource<EpidemieModel>;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    isLoading = false;
  
    constructor(
        private epidemieService: EpidemieService) {}


        ngAfterViewInit() {
          this.isLoading = true;
          this.epidemieService.all().subscribe({
            next: res => {
              this.ELEMENT_DATA = res;
  
              this.ELEMENT_DATA_FILTER = this.ELEMENT_DATA.filter(u => this.patient.id == u.patient_id); 
  
              this.dataSource = new MatTableDataSource<EpidemieModel>(this.ELEMENT_DATA_FILTER);
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
  
    
}