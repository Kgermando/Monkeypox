import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from '../models/user-models'; 
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
   
    dataSource: MatTableDataSource<UserModel>;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

    isLoading = false;

    err: any;


    constructor(
        private usersService: UsersService ) {}
    
      ngAfterViewInit() { 
        this.isLoading = true;
        this.usersService.all().subscribe({
          next: res => {
            this.ELEMENT_DATA = res;
  
            this.dataSource = new MatTableDataSource<UserModel>(this.ELEMENT_DATA);
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
     
}