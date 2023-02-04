import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
})
export class ProductsViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string;
  OnProductClick(name: string){
    this.name = name;
  }

}
