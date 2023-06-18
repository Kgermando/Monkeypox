import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PatientModel } from 'src/app/patients/models/patient-model';
import { PatientService } from 'src/app/patients/patient.service';
import { MetaModel } from 'src/app/shared/models/meta-model';
import { UserModel } from '../../models/user-models';

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent implements AfterViewInit {
    @Input() user: UserModel;

    displayedColumns: string[] = ['id', 'fullname', 'sexe', 'fourchette_age', 'aire_sante', 'created'];


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ELEMENT_DATA: PatientModel[] = [];
  ELEMENT_DATA_FILTER: PatientModel[] = [];

  isLoading = false;

  dataSource: MatTableDataSource<PatientModel>;

  constructor(
    private patientService: PatientService,
    private router: Router) {}

  ngAfterViewInit() {
    this.isLoading = true;
    this.patientService.all().subscribe({
      next:  res => {
        this.ELEMENT_DATA = res; 
        this.ELEMENT_DATA_FILTER = this.ELEMENT_DATA.filter(u => this.user.matricule == u.signature);
 
        this.dataSource = new MatTableDataSource<PatientModel>(this.ELEMENT_DATA_FILTER);
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
      }
    } ); 
    this.isLoading = false;
  }

  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
