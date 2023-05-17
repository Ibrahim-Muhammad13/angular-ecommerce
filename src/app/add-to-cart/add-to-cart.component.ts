import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  products: Product [] = [];

  quantity:number=1;

  increament(id:number){
    this.products.filter((product)=>product.id==id).map((product)=>{
      product.quantity = product.quantity!+1;
      return product;
    });
    
  }
  decreament(id:number){
    this.products.filter((product)=>product.id==id).map((product)=>{
      product.quantity = product.quantity!-1;
      return product;
    }); 
  }

  removeItem(id:number){
    this.cart.removeItem(id);
  }
    constructor( private cart:CartService) {
    }

    ngOnInit(){
      this.products = this.cart.getItems()
    }
}
