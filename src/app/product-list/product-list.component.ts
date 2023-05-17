import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import * as proudcts from '../../assets/products.json';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 products!: Product [] 
constructor(private product: ProductsService) { }

ngOnInit(): void {
  this.product.getAllProducts().subscribe((product: any) => this.products = product.products);
  
}

}
