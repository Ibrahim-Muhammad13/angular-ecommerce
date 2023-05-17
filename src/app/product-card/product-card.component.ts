import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input() product!: Product;

constructor(private router: Router, private cart:CartService, private products: ProductsService) { 

}


productDetails(id: number){
  console.log(id);
  this.router.navigate(['/product_details',id]);
}

addTocart(id: number){
  
  const item = this.cart.cartItems.find((product)=>product.id==id)
  if(item){
    console.log(item);
   item.quantity = item.quantity!+1;
  }else{
    this.products.getProductById(id).subscribe((product: any) => this.cart.addToCart(product));
  }


}
}
