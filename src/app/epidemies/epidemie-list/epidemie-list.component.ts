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
  displayedColumns: string[] = ['num_epi', 'semaine_epi', 'date_notification', 'patient_id', 'fievre', 'eruption_cutanee', 'date_symptome', 'date_admition', 'date_diagonstic', 'a_ete_contact_patient', 'type_contact', 'a_ete_hospitalise', 'croute', 'ecouvillon', 'prevelement_sanguin', 'date_prelevement', 'date_expedition', 'statut'];

  
    ELEMENT_DATA: EpidemieModel[] = [];
  
    metaData: any = [];
    
    pageMeta: MetaModel;

    dataSource: MatTableDataSource<EpidemieModel>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
  

    constructor(
        private epidemieService: EpidemieService,
        private router: Router) {}


        ngAfterViewInit() {
          this.epidemieService.getList().subscribe(res => {
            this.metaData = res;
      
            this.ELEMENT_DATA = this.metaData['data'];
            this.pageMeta = this.metaData['meta'];
      
            console.log(this.pageMeta);
            console.log(this.ELEMENT_DATA); 
            this.dataSource = new MatTableDataSource<EpidemieModel>(this.ELEMENT_DATA);
            this.dataSource.paginator = this.paginator;
          })
      
        }   

      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
    
      editItem(id: number){
        this.router.navigate(['/epidemies/epidemie-edit', id]);
      }
    
    
      removeItem(id: number){
        this.epidemieService.deleteData(id);
      }
    
}
