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
    let allProducts = [];

    this.productsService.filterData.subscribe(filters => {
      let query = this.buildQuery(filters);
      console.log("Query:", query);
      
      this.productsService.getProducts(query)
        .subscribe(products =>{
          this.products = allProducts = products;
          console.log("products", products);
          
          this.router.navigate(['products'], { queryParams: filters });
          
        })
    })

    this.productsService.searching.subscribe(text => {
      this.products = allProducts.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));

    })
  }

  private buildQuery(filters){
    if(filters.textSearch){
      return  `?categoryId=${filters.categoryId ?? 'cars'}&textSearch=${filters.textSearch}`;
    }
    return `?categoryId=${filters.categoryId ?? ''}&isInStock=${filters.isInStock ?? ''}&isAvailable=${filters.isAvailable ?? ''}&priceFrom=${filters.priceFrom ?? ''}&priceTo=${filters.priceTo ?? ''}`;
  }

}
