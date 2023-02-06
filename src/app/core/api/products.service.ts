import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../shared/category/category';
import { Product } from '../shared/product/product';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly url = "http://localhost:5257/api/Products";

  constructor(private http: HttpClient) { }

  filterData = new BehaviorSubject({});


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

  getProductsTree(query: string){
     return this.http.get<Category>(this.url + query);
  }

  getProduct(id: number){
    return this.http.get<Product>(this.url + "/" + id);
  }
}
