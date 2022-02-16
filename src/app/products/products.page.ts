import { CrudHttpService } from '../shared/crud-http.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

// products feature
import { Product } from './state/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.css']
})
export class ProductsPage implements OnInit {

  // products$: Observable<Product[]>
  selectedProduct: Product | null = null;

  products$: Observable<Product[]> | null = of([])
  constructor(private svc:CrudHttpService<Product>) {
    this.products$ = svc.list("products")
  }

  // constructor(private svc: ProductService) {
  //   this.products$ = svc.list$
  //  }

  ngOnInit(): void {
  }
  productSelected(product: Product): void {
    this.selectedProduct = product;;
    console.log("product selected:", product);
  }
  productDeleted(product: Product): void {
    this.selectedProduct = null;
    console.log("product deleted:", product);
  }



}
