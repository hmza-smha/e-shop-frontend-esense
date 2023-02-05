import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/core/api/products.service';
import { Category } from 'src/app/core/shared/category/category.module';

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
  
  @Output() categoryFilter = new EventEmitter();

  constructor(private productService: ProductService) {}

  categories: Category[] = [];

  ngOnInit(): void {
    // this.categories = this.productService.dummyTree;
    this.productService.getCategoriesTree().subscribe(res => this.categories = res);
  }

  fetchCategory(name: string){
    console.log("Fetching...", name);
    this.categoryFilter.emit(name);
  }
}
