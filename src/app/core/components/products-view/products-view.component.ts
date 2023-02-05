import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductService } from '../../api/products.service';
import { Category } from '../../shared/category/category.module';
import { Product } from '../../shared/product/product.module';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
})
export class ProductsViewComponent implements OnInit {

  constructor(private productsService: ProductService) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.productsService.getProductsTree('cars')
      .subscribe(tree => {
        this.products = this.getProducts(tree);
      })
  }

  onCategoryFilter(name) {
    this.productsService.getProductsTree(name)
    .subscribe(tree => {
      this.products = this.getProducts(tree);
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
