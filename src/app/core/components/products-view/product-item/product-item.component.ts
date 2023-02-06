import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/api/products.service';
import { Product } from 'src/app/core/shared/product/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit {

  @Input() item: Product;

  constructor(private productsService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  OnProductClick(itemId: number){
    this.router.navigate(['/details', itemId]);
  }
}
