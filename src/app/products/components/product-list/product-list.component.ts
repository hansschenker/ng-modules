import { Product } from './../../state/product.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[] =  [{id:1, name: 'test', price:4.5, category: 'fruit'}]
  @Output() onProductSelected = new EventEmitter<Product>()
  @Output() onProductDeleted = new EventEmitter<Product>()
  constructor() { }

  ngOnInit(): void {
  }
  selectProduct(product: Product): void {
    this.onProductSelected.emit(product);
  }
  deleteProduct(product: Product): void {
    this.onProductDeleted.emit(product);
  }
}
