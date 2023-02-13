import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../api/products.service';
import { Product } from '../../shared/product/product';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
})
export class ProductsViewComponent{

  constructor(
    private productsService: ProductService,
    private activatedRouter: ActivatedRoute,
    private router: Router
    ) { }

  onCategoryFilter(categoryId: number) {
    this.productsService.filterData.next({
      ...this.productsService.filterData.getValue(),
      categoryId: categoryId,
    });
  }
}
