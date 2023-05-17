import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartcount:number=0;
  constructor(private cart:CartService) { }

  ngOnInit() {
  
  this.cart.cartCount.subscribe((count)=>{
    this.cartcount=count;
    // console.log(this.cartcount);    
  })
}

}
