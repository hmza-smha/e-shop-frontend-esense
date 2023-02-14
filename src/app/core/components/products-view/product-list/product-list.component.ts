import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/api/products.service';
import { Product } from 'src/app/core/shared/product/product';


interface Filters {
  categoryId?: number;
  isInStuck?: boolean;
  isAvailable?: boolean;
  priceFrom?: number;
  priceTo?: number;
  order?: string;
  sort?: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  constructor(
    private productsService: ProductService,
    private router: Router
    ) { }

  products: Product[] = [];
  filters: Filters;

  ngOnInit(): void {
    let allProducts = [];

    this.productsService.filterData.subscribe(filter => {
      this.filters = {
        ...this.filters,
        ...filter
      }

      let query = this.buildQuery(this.filters);

      this.productsService.getProducts(query)
        .subscribe(products =>{
          this.products = allProducts = products;
          
          this.router.navigate(['products'], { queryParams: this.filters });
          
        })
    })

    this.productsService.searching.subscribe(text => {
      this.products = allProducts.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));

    })
  }

  onDropdownFilters(value){
    this.productsService.filterData.next({
      order: value.target.value
    });
  }

  private buildQuery(filters){
    if(filters.textSearch){
      return  `?categoryId=${filters.categoryId ?? 'cars'}&textSearch=${filters.textSearch}&${filters.order ?? ''}`;
    }
    return `?categoryId=${filters.categoryId ?? ''}&isInStock=${filters.isInStock ?? ''}&isAvailable=${filters.isAvailable ?? ''}&priceFrom=${filters.priceFrom ?? ''}&priceTo=${filters.priceTo ?? ''}&${filters.order ?? ''}`;
  }

}
