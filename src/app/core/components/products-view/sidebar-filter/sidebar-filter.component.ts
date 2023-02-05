import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
})
export class SidebarFilterComponent implements OnInit {
  @ViewChild('priceRange') priceRange: ElementRef;

  @Output('filters') applyFilters = new EventEmitter();

  filters: any;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onNotAvailable(condition){
    console.log("onNotAvailable: ", condition.target.checked);
    this.activatedRouter.queryParams.subscribe(res => {
      console.log('activatedRouter', res);
      this.router.navigate(['products'], { queryParams: {...res, available: condition.target.checked } });
    })
  }

  onInStuck(condition){
    console.log("onInStuck: ", condition.target.checked);
    this.activatedRouter.queryParams.subscribe(res => {
      console.log('activatedRouter', res);
      this.router.navigate(['products'], { queryParams: {...res, instuck: condition.target.checked } });
    })
  }

  filterPrice(){
    // console.log('Price', this.priceRange.nativeElement.value);

    let price = this.priceRange.nativeElement.value.replaceAll('$','');
    let arr = price.replaceAll(' - ',' ').split(' ');

    console.log("price: ", arr);
    this.activatedRouter.queryParams.subscribe(res => {
      console.log('activatedRouter', res);
      this.router.navigate(['products'], { queryParams: {...res, priceFrom:  arr[0], priceTo: arr[1]} });
    })
    
  }
}
