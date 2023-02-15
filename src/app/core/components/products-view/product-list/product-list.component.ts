import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/backend/services/products.service';
import { Product } from 'src/app/core/shared/product/product';
import { Filters } from '../products-view.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
    `
      li {
        cursor: pointer
      }
    `,
  ],
})
export class ProductListComponent implements OnInit {

  constructor(
    private productsService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  products: Product[] = [];
  filters: Filters;
  take = 1;
  page: number = 0;

  ngOnInit(): void {
    let allProducts = [];

    this.productsService.filterData.subscribe(filter => {
      this.filters = {
        ...this.filters,
        ...filter
      }

      this.productsService.getProducts(this.filters)
        .subscribe(products => {
          this.products = allProducts = products;
        })

      this.router.navigate(['products'], { queryParams: this.filters });
    })

    this.productsService.searching.subscribe(text => {
      this.products = allProducts.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
    })
  }

  onDropdownFilters(value) {
    let values = value.target.value.split(',');

    this.productsService.filterData.next({
      sort: values[0],
      order: values[1]
    });
  }

  onTakeFilters(value) {
    
    this.take = value.target.value;
    this.productsService.filterData.next({
      take: value.target.value
    });

  }

  onPaginator(no: string) {
    this.page = +no;
    let skip = +no * this.take;
    this.productsService.filterData.next({
      skip: skip
    });
  }

  onPageArrows(n: number){
    this.page += n;
    if(this.page >= 0)
      this.onPaginator(this.page + '')
  }

  private buildQuery(filters) {
    return `?categoryId=${filters.categoryId ?? ''}&isInStock=${filters.isInStock ?? ''}&isAvailable=${filters.isAvailable ?? ''}&priceFrom=${filters.priceFrom ?? ''}&priceTo=${filters.priceTo ?? ''}&${filters.order ?? ''}`;
  }

}
