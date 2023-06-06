import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ZoneSanteModel } from '../../models/zone-sante-model';
import { MetaModel } from 'src/app/shared/models/meta-model';
import { ZoneSanteService } from '../zone-sante.service';
import { Router } from '@angular/router';
import { provinces } from 'src/app/shared/utils/province';

@Component({
  selector: 'app-zone-sante-list',
  templateUrl: './zone-sante-list.component.html',
  styleUrls: ['./zone-sante-list.component.scss']
})
export class ZoneSanteListComponent {
  displayedColumns: string[] = ['zone', 'province', 'territoire', 'signature', 'created', 'edit', 'delete'];
 
  ELEMENT_DATA: ZoneSanteModel[] = [];
  
  metaData: any = [];

  pageMeta: MetaModel;

  provinceList: String[] = provinces;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  dataSource: MatTableDataSource<ZoneSanteModel>;

  constructor(
    private zoneSanteService: ZoneSanteService,
    private router: Router) {}

  ngAfterViewInit() {
    this.zoneSanteService.getList().subscribe(res => {
      this.metaData = res;

      this.ELEMENT_DATA = this.metaData['data'];
      this.pageMeta = this.metaData['meta'];

      console.log(this.pageMeta);
      console.log(this.ELEMENT_DATA); 
      this.dataSource = new MatTableDataSource<ZoneSanteModel>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
