import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../backend/services/products.service';

export interface Filters {
  id?: number;
  categoryId?: number;
  isInStock?: boolean;
  isAvailable?: boolean;
  priceFrom?: number;
  priceTo?: number;
  order?: string;
  sort?: string;
}

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
})
export class ProductsViewComponent implements OnInit{

  filters: Filters;

  constructor(
    private productsService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    // this.productsService.filterData.subscribe(filter => {
    //   this.filters = {
    //     ...this.filters,
    //     ...filter
    //   }

    //   this.router.navigate(['products'], { queryParams: this.filters });
    // })
  }

  onCategoryFilter(categoryId: number) {
    this.productsService.filterData.next({
      categoryId: categoryId,
    });
  }
}
