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
    private activatedRouter: ActivatedRoute,
    private router: Router
    ) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.productsService.filterData.subscribe(filters => {
      let query = this.buildQuery(filters);
      this.productsService.getProductsTree(query)
        .subscribe(tree =>{
          this.router.navigate(['products'], { queryParams: filters });

          this.products = this.getProducts(tree);
        })
    })
  }

  private buildQuery(filters){
    if(filters.textSearch){
      return  `?categoryName=${filters.categoryName ?? 'cars'}&textSearch=${filters.textSearch}`;
    }

    return `?categoryName=${filters.categoryName ?? ''}&inStuck=${filters.inStuck ?? ''}&available=${filters.available ?? ''}&priceFrom=${filters.priceFrom ?? ''}&priceTo=${filters.priceTo ?? ''}`;
  }

  private getProducts(tree) {
    let all = [];    
    all = [...all, ...tree.products];
    tree.subProducts.forEach(levelOne => {
      all = [...all, ...levelOne.products];
      levelOne.subProducts.forEach(levelTwo => {
        all = [...all, ...levelTwo.products];
      });
    });

    return all;
  }

}
