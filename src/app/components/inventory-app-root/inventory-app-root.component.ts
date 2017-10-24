import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './inventory-app-root.component.html',
  styleUrls: ['./inventory-app-root.component.css']
})
export class InventoryAppRootComponent implements OnInit {

  products: Product[];

  constructor() {

    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes', '/assets/img/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket', '/assets/img/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat', '/assets/img/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'],
        29.99)
    ];

  };//

  ngOnInit() {
  }

  productSelected($event){
    console.log($event)
  }

}
