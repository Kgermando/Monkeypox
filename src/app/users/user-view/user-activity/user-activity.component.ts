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

    displayedColumns: string[] = ['id', 'sexe', 'age_mois', 'age_an', 'aire_sante', 'created'];


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ELEMENT_DATA: PatientModel[] = [];
  ELEMENT_DATA_FILTER: PatientModel[] = [];

  metaData: any = [];

  pageMeta: MetaModel;

  dataSource: MatTableDataSource<PatientModel>;

  constructor(
    private patientService: PatientService,
    private router: Router) {}

  ngAfterViewInit() {
    this.patientService.getList().subscribe(res => {
        this.metaData = res;
  
        this.ELEMENT_DATA = this.metaData['data'];
        this.pageMeta = this.metaData['meta'];

        this.ELEMENT_DATA_FILTER = this.ELEMENT_DATA.filter(u => this.user.matricule == u.signature);

        console.log(this.pageMeta);
        console.log(this.ELEMENT_DATA); 
        this.dataSource = new MatTableDataSource<PatientModel>(this.ELEMENT_DATA_FILTER);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

}
