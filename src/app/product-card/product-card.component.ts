import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input() product!: Product;

constructor(private router: Router) { }

productDetails(id: number){
  console.log(id);
  this.router.navigate(['/product_details',id]);
}
}
