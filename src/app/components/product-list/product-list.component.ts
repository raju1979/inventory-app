import { Component, OnInit ,Input,Output,ViewChild,EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input('productList') products:Product[];

  @Output('change') change = new EventEmitter();

  selectedProductIndex:number;

  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }



  productSelected($event){
    let selectedIndex = this.products.indexOf($event.selectedProduct);
    console.log(selectedIndex)
    if(selectedIndex > -1){
      this.selectedProductIndex = selectedIndex;
      console.log(this.selectedProductIndex)
    }
    console.log($event)
  }

}
