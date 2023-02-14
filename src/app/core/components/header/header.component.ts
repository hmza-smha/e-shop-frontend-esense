import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../api/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private activatedRouter: ActivatedRoute,
    private productsService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSearching(search: string){
    this.productsService.searching.next(search);
  }

  onSubmit(searchForm){

  }

}
