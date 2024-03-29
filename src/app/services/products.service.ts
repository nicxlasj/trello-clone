import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private _httpService = inject(HttpClient);
  private _apiUrl = "https://api.escuelajs.co/api/v1/products";
  products = signal<Product[]>([]);

  getProducts() {
    this._httpService.get<Product[]>(this._apiUrl).subscribe(p => this.products.set(p));
  }

}
