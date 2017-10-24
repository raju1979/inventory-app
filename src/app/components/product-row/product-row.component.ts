import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input('product') product:Product[];
  @Input('index') index:Product[];
  
  @Output('change') change = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  productClicked(index){
    
    this.change.emit({selectedProduct:this.product})
  }

}
