import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  
    selectedProduct:Product | undefined;
    constructor(private activatedRoute :ActivatedRoute, private product: ProductsService) {}

    // ngOnInit(){
    //  this.product.getProductById(this.activatedRoute.snapshot.params.id).subscribe((product: any) => this.selectedProduct = product);
    // //  console.log(this.selectedProduct);
    // }
}
