import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductService } from 'src/app/core/backend/services/products.service';
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
    this.productsService.getProducts({id})
    .pipe(map(x => x[0]))
    .subscribe(res => {
      this.additionalInfo = JSON.parse(res.additionalInfo);
      this.item = res as Product;
    })
  }

}
