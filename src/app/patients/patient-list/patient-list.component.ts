import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MetaModel } from 'src/app/shared/models/meta-model';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { PatientModel } from '../models/patient-model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements AfterViewInit {

  displayedColumns: string[] = ['id','fullname', 'sexe', 'age_mois', 'age_an', 'aire_sante', 'created'];

  ELEMENT_DATA: PatientModel[] = [];
  isLoading = false;

  dataSource: MatTableDataSource<PatientModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
      private patientService: PatientService,
      private router: Router) {}
  
    ngAfterViewInit() {
      this.isLoading = true;
      this.patientService.all().subscribe({
        next: res => { 
          this.ELEMENT_DATA = res;
          this.dataSource = new MatTableDataSource<PatientModel>(this.ELEMENT_DATA);
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
      this.router.navigate(['/patients/patient-edit', id]);
    }
  
  
}
 