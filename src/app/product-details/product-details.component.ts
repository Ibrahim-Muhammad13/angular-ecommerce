import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  products: Product [] = [
    {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image: 'https://cdn.pixabay.com/photo/2016/11/10/16/18/android-1814600_960_720.jpg',
    count: 10,
    date: new Date(2019, 1, 1)
    },
    {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    image: 'https://cdn.pixabay.com/photo/2016/11/10/16/18/android-1814600_960_720.jpg',
    count: 0,
    date: new Date(2019, 1, 1)
    },
    { 
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    image: 'https://cdn.pixabay.com/photo/2016/11/10/16/18/android-1814600_960_720.jpg',
    count: 0,
    date: new Date(2019, 1, 1)
    },
    {
    id: 4,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image: 'https://cdn.pixabay.com/photo/2016/11/10/16/18/android-1814600_960_720.jpg',
    count: 0,
    date: new Date(2019, 1, 1)
    },
    
      
    
    
    ];
    selectedProduct:Product | undefined;
  constructor(private activatedRoute :ActivatedRoute) {}

  ngOnInit(){
   this.selectedProduct = this.products.find(p => p.id == this.activatedRoute.snapshot.params['id'])
  }
}
