import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/core/backend/services/products.service';

@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
})
export class SidebarFilterComponent implements OnInit {
  @ViewChild('priceRange') priceRange: ElementRef;

  @Output('filters') applyFilters = new EventEmitter();

  filters: any;

  constructor(
    private productsService: ProductService) { }

  ngOnInit(): void {
  }

  onNotAvailable(condition){
    this.productsService.filterData.next({
      isAvailable: condition.target.checked,
    });
  }

  onInStuck(condition){
    this.productsService.filterData.next({
      isInStock: condition.target.checked,
    });
  }

  filterPrice(){
    const price = this.priceRange.nativeElement.value
      .replaceAll('$', '')
      .replaceAll(' - ',' ')
      .split(' ');
      
    this.productsService.filterData.next({
      priceFrom:  price[0],
      priceTo: price[1]
    });
  }
}
