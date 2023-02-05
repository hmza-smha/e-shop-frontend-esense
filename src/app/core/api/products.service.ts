import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Category } from '../shared/category/category.module';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly url = "http://localhost:5257/api/Products";

  constructor(private http: HttpClient) { }

  // for testing
  dummyTree: Category[] = [
    {
      name: 'Cars',
      children: [
        {
          name: 'BMW',
        },
        {
          name: 'Honda',
        },
      ],
    },
    {
      name: 'Mens',
      children: [
        {
          name: 'Jeans',
          children: [
            {
              name: 'Classic 1'
            },
            {
              name: 'Classic 2'
            }
          ],
        },
        {
          name: 'T-Shirt',
        },
      ],
    },
    {
      name: 'Women',
      children: [
        {
          name: 'Jeans',
        },
        {
          name: 'T-Shirt'
        },
      ],
    },
    {
      name: 'Kids',
      children: [
        {
          name: 'Jeans',
          children: [
            {
              name: 'Jeans',
            },
            {
              name: 'T-Shirt'
            },
          ],
        },
        {
          name: 'T-Shirt'
        },
      ],
    },
  ];


  getCategoriesTree(){
    return this.http.get<Category[]>(this.url + "/tree");
  }

  getProductsTree(category: string){
     return this.http.get<Category>(this.url + "?categoryName="+category);
  }

}
