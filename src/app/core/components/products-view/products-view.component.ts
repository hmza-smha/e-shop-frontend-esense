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

  onCategoryFilter(name) {
    // this.activatedRouter.queryParams.subscribe(res => {
    //   this.router.navigate(['products'], { queryParams: {...res, categoryName: name } });
    // })

    this.productsService.filterData.next({
      ...this.productsService.filterData.getValue(),
      categoryName: name,
      textSearch: ''
    });
  }
}
