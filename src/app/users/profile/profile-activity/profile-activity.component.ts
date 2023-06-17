import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PatientModel } from 'src/app/patients/models/patient-model';
import { PatientService } from 'src/app/patients/patient.service';
import { UserModel } from 'src/app/users/models/user-models';

@Component({
  selector: 'app-profile-activity',
  templateUrl: './profile-activity.component.html',
  styleUrls: ['./profile-activity.component.scss']
})
export class ProfileActivityComponent {
  @Input() currentUser: UserModel;

  displayedColumns: string[] = ['id', 'sexe', 'age_mois', 'age_an', 'aire_sante', 'created'];


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
      this.ELEMENT_DATA_FILTER = this.ELEMENT_DATA.filter(u => this.currentUser.matricule == u.signature);

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
