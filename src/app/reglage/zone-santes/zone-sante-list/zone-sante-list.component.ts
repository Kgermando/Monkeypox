import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-zone-sante-list',
  templateUrl: './zone-sante-list.component.html',
  styleUrls: ['./zone-sante-list.component.scss']
})
export class ZoneSanteListComponent {
  displayedColumns: string[] = ['position', 'product', 'customer', 'price', 'vendor', 'date', 'status', 'rating'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
  }

  pending = true;
  outOfStock = true;
  delivered = true;

}

export interface PeriodicElement {
  customer: string;
  position: string;
  product: any;
  price: string;
  vendor: string;
  date: string;
  status: any;
  rating: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
      position: '#SK258',
      product: {
          productName: 'Laptop Mac Pro',
          productImage: 'assets/img/recent-orders/product1.jpg',
      },
      customer: 'Colin Firth',
      price: '$289.50',
      vendor: 'Apple',
      date: '01-12-2022',
      status: {
          pending: 'Pending'
      },
      rating: {
          star: '5.0',
          overall: '(61 Votes)'
      }
  },
  {
      position: '#AA257',
      product: {
          productName: 'Smart Camera XD6',
          productImage: 'assets/img/recent-orders/product2.jpg',
      },
      customer: 'Alina Smith',
      price: '$876.55',
      vendor: 'Camera',
      date: '02-12-2022',
      status: {
          outOfStock: 'Out of Stock'
      },
      rating: {
          star: '4.9',
          overall: '(55 Votes)'
      }
  },
];