import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../shared/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly url = "http://localhost:5257/api/Category";

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(this.url);
  }

  // for testing
  // dummyTree: Category[] = [
  //   {
  //     name: 'Cars',
  //     children: [
  //       {
  //         name: 'BMW',
  //       },
  //       {
  //         name: 'Honda',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Mens',
  //     children: [
  //       {
  //         name: 'Jeans',
  //         children: [
  //           {
  //             name: 'Classic 1'
  //           },
  //           {
  //             name: 'Classic 2'
  //           }
  //         ],
  //       },
  //       {
  //         name: 'T-Shirt',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Women',
  //     children: [
  //       {
  //         name: 'Jeans',
  //       },
  //       {
  //         name: 'T-Shirt'
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Kids',
  //     children: [
  //       {
  //         name: 'Jeans',
  //         children: [
  //           {
  //             name: 'Jeans',
  //           },
  //           {
  //             name: 'T-Shirt'
  //           },
  //         ],
  //       },
  //       {
  //         name: 'T-Shirt'
  //       },
  //     ],
  //   },
  // ];
}
