import { Component, OnInit, inject, signal } from '@angular/core';
import { CdkTableModule, DataSource } from '@angular/cdk/table';
import { ProductsService } from '../../services/products.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Product } from '../../models/Product';
import { BehaviorSubject, Observable } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';

var products = signal<Product[]>([{
  id : 1,
  title : 'Playstation 5',
  description : 'The best videogames console',
  images : [''],
  price : 500
},
{
  id : 2,
  title : 'Xbox series X',
  description : 'A good videogames console :)',
  images : [''],
  price : 500
}]);

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CdkTableModule, NavbarComponent],
  templateUrl: './table.component.html'
})


export class TableComponent implements OnInit {
  private _productService = inject(ProductsService);
  displayedColumns : string[] = ['title', 'description', 'price']
  
  ngOnInit(): void {
    this._productService.getProducts();
  }
  dataSource = new ProductsDataSource();
}

export class ProductsDataSource extends DataSource<Product> {
  data = new BehaviorSubject<Product[]>(products());
  connect() : Observable<Product[]> {
      return this.data;
  }
  override disconnect(collectionViewer: CollectionViewer): void {
    
  }
}