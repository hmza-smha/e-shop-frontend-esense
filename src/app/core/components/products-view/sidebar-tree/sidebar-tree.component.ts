import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from 'src/app/core/api/category.service';
import { ProductService } from 'src/app/core/api/products.service';
import { Category } from 'src/app/core/shared/category/category';

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

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService) {}

  categories: Category[] = [];

  ngOnInit(): void {
    // this.categories = this.categoryService.dummyTree;
    // this.productService.getCategoriesTree().subscribe(res => this.categories = res);
    this.categoryService.getCategoryTree().subscribe(res => {
      this.categories = res;
      console.log("Tree", this.categories);
    });
  }

  fetchCategory(name: string){
    this.categoryFilter.emit(name);
  }
}
