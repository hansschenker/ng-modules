import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// products feature
import { ProductService } from './product.service';
import { Product } from './state/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.css']
})
export class ProductsPage implements OnInit {

  products$: Observable<Product[]>
  selectedProduct: Product | null = null;
  constructor(private svc: ProductService) {
    this.products$ = svc.products$
   }

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
