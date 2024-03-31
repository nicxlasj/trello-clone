import { Component, OnInit, inject, signal } from '@angular/core';
import { CdkTableModule, DataSource } from '@angular/cdk/table';
import { ProductsService } from '../../services/products.service';
import { NavbarComponent } from '../navbar/navbar.component';


// var products = signal<Product[]>([]);

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CdkTableModule, NavbarComponent],
  templateUrl: './table.component.html'
})


export class TableComponent implements OnInit {
  private _productService = inject(ProductsService);
  displayedColumns : string[] = ['title', 'cover', 'price']
  products2 = this._productService.products
  ngOnInit(): void {
    this._productService.getProducts();
  }
  // dataSource = new ProductsDataSource();
}

// export class ProductsDataSource extends DataSource<Product> {
//   data = new BehaviorSubject<Product[]>(products());
//   connect() : Observable<Product[]> {
//       return this.data;
//   }
//   override disconnect(collectionViewer: CollectionViewer): void {
    
//   }
// }