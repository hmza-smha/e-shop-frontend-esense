import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
})
export class SidebarFilterComponent implements OnInit {
  @ViewChild('priceRange') priceRange: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onNotAvailable(condition){
    console.log("onNotAvailable: ", condition.target.checked);

  }

  onInStuck(condition){
    console.log("onInStuck: ", condition.target.checked);

  }

  filterPrice(){
    console.log('Price', this.priceRange.nativeElement.value);
  }
}
