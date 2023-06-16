import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StructureModel } from '../../models/structure-model';
import { StructureService } from '../structure.service';
import { MetaModel } from 'src/app/shared/models/meta-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structure-list',
  templateUrl: './structure-list.component.html',
  styleUrls: ['./structure-list.component.scss']
})
export class StructureListComponent implements AfterViewInit {
  displayedColumns: string[] = ['nom_complet', 'single', 'manager', 'signature', 'created', 'edit', 'delete'];

  ELEMENT_DATA: StructureModel[] = [];
  
  isLoading = false;
 
  dataSource: MatTableDataSource<StructureModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private structureService: StructureService,
    private router: Router) {}

  ngAfterViewInit() {
    this.isLoading = true;
    this.structureService.all().subscribe({
      next: res => { 
        this.ELEMENT_DATA = res;
        this.dataSource = new MatTableDataSource<StructureModel>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      },
      error: (err) => {
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
    this.router.navigate(['/reglages/structure-add', id]);
  }


  removeItem(id: number){
    this.structureService.delete(id);
  }


}
