import { Component } from '@angular/core';
import { ProductService } from '../../api/products.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
})
export class ProductsViewComponent{

  constructor(
    private productsService: ProductService) { }

  onCategoryFilter(categoryId: number) {
    this.productsService.filterData.next({
      categoryId: categoryId,
    });
  }
}
