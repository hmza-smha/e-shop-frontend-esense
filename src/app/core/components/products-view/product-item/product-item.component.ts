import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/api/products.service';
import { Product } from 'src/app/core/shared/product/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() item: Product;

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
  }

  OnProductClick(itemId){
    console.log('item', itemId);
    this.productsService.getProduct(itemId)
    .subscribe(x => {
      console.log('x', x);
      
    })
  }
}
