import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/shared/product/product.module';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() item: Product;

  constructor() { }

  ngOnInit(): void {
  }

  OnProductClick(name: string){
    console.log('name', name);
  }
}
