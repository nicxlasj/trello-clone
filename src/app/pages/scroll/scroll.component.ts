import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductsService } from '../../services/products.service';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, ScrollingModule],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent implements OnInit {
  private _productService = inject(ProductsService);
  products = this._productService.products;
  ngOnInit(): void {
    this._productService.getProducts();
    console.log(this.products());
  }
}
