import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from 'src/app/core/backend/services/category.service';
import { ProductService } from 'src/app/core/backend/services/products.service';
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
    this.categoryService.get().subscribe(categories => {
      this.categories = this.buildTree(categories as Category[]);
    });
  }


  fetchCategory(name: number, event){
    let children = event.target.nextSibling;
    if(children?.style?.display == "block"){
      children.style.display = "none";
    }
    else if (children?.style?.display == "none") {
      children.style.display = "block";
    }
    
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
