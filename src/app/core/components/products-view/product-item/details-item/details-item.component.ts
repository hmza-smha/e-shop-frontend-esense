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
  additionalInfo: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductService
  ) { }

  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.params['id'];
    this.productsService.getProduct(id).subscribe(res => {
      this.additionalInfo = JSON.parse(res.additionalInfo);      
      this.item = res;
    })
  }

}
