import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/api/products.service';

@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
})
export class SidebarFilterComponent implements OnInit {
  @ViewChild('priceRange') priceRange: ElementRef;

  @Output('filters') applyFilters = new EventEmitter();

  filters: any;

  constructor(
    private productsService: ProductService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onNotAvailable(condition){
    this.productsService.filterData.next({
      ...this.productsService.filterData.getValue(),
      isAvailable: condition.target.checked,
    });
  }

  onInStuck(condition){
    this.productsService.filterData.next({
      ...this.productsService.filterData.getValue(),
      isInStock: condition.target.checked,
    });
  }

  filterPrice(){
    const price = this.priceRange.nativeElement.value
      .replaceAll('$', '')
      .replaceAll(' - ',' ')
      .split(' ');
      
    this.productsService.filterData.next({
      ...this.productsService.filterData.getValue(),
      priceFrom:  price[0],
      priceTo: price[1]
    });
  }
}
