import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/api/products.service';
import { Product } from 'src/app/core/shared/product/product';

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html'
})
export class DetailsItemComponent implements OnInit {

  item: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductService
  ) { }

  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.params['id'];
    this.productsService.getProduct(id).subscribe(res => {
      console.log("priduct", res);
      this.item = res;
    })
  }

}
