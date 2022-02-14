import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './state/product.interface';

@Injectable()
export class ProductService {

  baseUrl = "/api/products";
  products$ = this.http.get<Product[]>(this.baseUrl)
  constructor(private http: HttpClient) { }
}
