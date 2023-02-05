import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ProductService } from '../../api/products.service';
import { Category } from '../../shared/category/category.module';
import { Product } from '../../shared/product/product.module';


class Filters {
  categoryName: string;
  textSearch: string;
  inStuck: string;
  available: string;
  priceFrom: number;
  priceTo: number;
}

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
})
export class ProductsViewComponent implements OnInit {

  constructor(
    private productsService: ProductService,
    private activatedRouter: ActivatedRoute,
    private router: Router
    ) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe(res => {
      console.log('activatedRouter', res);
      let url = this.router.url;
      
      this.productsService.getProductsTree(url)
        .subscribe(tree => {
      this.products = this.getProducts(tree);
      })
      

    })

    // this.productsService.getProductsTree('cars')
    //   .subscribe(tree => {
    //     this.products = this.getProducts(tree);
    //   })
  }

  onCategoryFilter(name) {
    // this.router.navigate(['products'], { queryParams: {categoryName: name} })

    console.log("category filter: ", name);
    this.activatedRouter.queryParams.subscribe(res => {
      console.log('activatedRouter', res);
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
