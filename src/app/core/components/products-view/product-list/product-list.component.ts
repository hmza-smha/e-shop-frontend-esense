import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/api/products.service';
import { Product } from 'src/app/core/shared/product/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  constructor(
      private productsService: ProductService,
      private activatedRoute: ActivatedRoute
    ) { }

  products: Product[] = [];

  ngOnInit(): void {
    let allProducts = [];

    this.activatedRoute.queryParams.subscribe(res=>{
      let query = this.buildQuery(res);
      this.productsService.getProducts(query)
        .subscribe(products =>{
          this.products = allProducts = products;          
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
    return `?categoryId=${filters.categoryId ?? ''}&isInStock=${filters.isInStock ?? ''}&isAvailable=${filters.isAvailable ?? ''}&priceFrom=${filters.priceFrom ?? ''}&priceTo=${filters.priceTo ?? ''}&${filters.order ?? ''}`;
  }

}
