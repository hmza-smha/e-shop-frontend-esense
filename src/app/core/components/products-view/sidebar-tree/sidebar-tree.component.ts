import { Component, OnInit } from '@angular/core';
import { Category, ProductService } from 'src/app/core/api/products.service';

@Component({
  selector: 'app-sidebar-tree',
  templateUrl: './sidebar-tree.component.html',
  styles: [
    `
      li {
        cursor: pointer
      }
      li:hover {
        background-color: inherit !important;
      }
    `,
  ],
})

export class SidebarTreeComponent implements OnInit {
  constructor(private productService: ProductService) {}

  categories: Category[] = [];

  ngOnInit(): void {
    // this.categories = this.productService.dummyTree;
    // this.productService.getCategoriesTree().subscribe(res => this.categories = res)
  }

  fetchCategory(name: string){

    console.log("Fetching...", name);
  }
}
