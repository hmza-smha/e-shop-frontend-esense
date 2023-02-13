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

  searching = new BehaviorSubject<string>('');

  getProducts(query: string){
     return this.http.get<Product[]>(this.url + query);
  }

  getProduct(id: number){
    return this.http.get<Product>(this.url + "/" + id);
  }
}
