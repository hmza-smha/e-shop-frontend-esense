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
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = this.buildTree(categories);
    });
  }


  fetchCategory(name: number){
    console.log("Finching on...", name);
    
    this.categoryFilter.emit(name);
  }

  private buildTree(categories: Category[]): Category[] {

    let tree = categories.filter(x => x.parentCategoryId == null);

    tree.forEach(e => {
      e.children = categories.filter(x => x.parentCategoryId == e.id);
    });

    tree.forEach(e => {
      e.children.forEach(child => {
        child.children = categories.filter(x => x.parentCategoryId == child.id)
      })
    })    
    return tree;
  }
}
