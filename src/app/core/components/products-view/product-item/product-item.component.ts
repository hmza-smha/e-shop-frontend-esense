import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/api/products.service';
import { Product } from 'src/app/core/shared/product/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() item: Product;

  constructor(private productsService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  OnProductClick(itemId){
    this.router.navigate(['/details', itemId]);
    // console.log('item', itemId);
    // this.productsService.getProduct(itemId)
    // .subscribe(x => {
    //   console.log('x', x);
      
    // })
  }
}
