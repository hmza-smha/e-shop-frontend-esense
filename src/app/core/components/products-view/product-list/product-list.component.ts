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
    this.activatedRouter.queryParams.subscribe(res => {
      let url = this.router.url;
      if(url == '/') url = "/products?categoryName=Cars"
      this.productsService.getProductsTree(url)
        .subscribe(tree =>this.products = this.getProducts(tree))
    })
  }

  onCategoryFilter(name) {
    this.activatedRouter.queryParams.subscribe(res => {
      this.router.navigate(['products'], { queryParams: {...res, categoryName: name } });
    })

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
