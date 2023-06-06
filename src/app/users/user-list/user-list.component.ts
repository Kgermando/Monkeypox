import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from '../models/user-models';
import { MetaModel } from 'src/app/shared/models/meta-model';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit {

    displayedColumns: string[] = ['id', 'structure', 'nom', 'postnom', 'prenom', 'sexe', 'titre', 'zone_sante', 'created'];

    ELEMENT_DATA: UserModel[] = [];
  
    metaData: any = [];
  
    pageMeta: MetaModel;
  
  
    // dataSource = new MatTableDataSource<StructureModel>(this.ELEMENT_DATA);
    dataSource: MatTableDataSource<UserModel>;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;


    constructor(
        private usersService: UsersService,
        private router: Router) {}
    
      ngAfterViewInit() {
        this.usersService.getList().subscribe(res => {
          this.metaData = res;
    
          this.ELEMENT_DATA = this.metaData['data'];
          this.pageMeta = this.metaData['meta'];
    
          console.log(this.pageMeta);
          console.log(this.ELEMENT_DATA); 
          this.dataSource = new MatTableDataSource<UserModel>(this.ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
        })
    
      }
    
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
    
      editItem(id: number){
        this.router.navigate(['/users/user-edit', id]);
      }
    
    
      removeItem(id: number){
        this.usersService.deleteData(id);
      }
    
    
}