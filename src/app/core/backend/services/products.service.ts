import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../shared/category/category';
import { Product } from '../../shared/product/product';
import { BehaviorSubject, Subject } from 'rxjs';
import { DataService } from '../data.service';
import { Filters } from '../../components/products-view/products-view.component';


@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService {

  private readonly productUrl = "http://localhost:5257/api/Products";

  constructor(http: HttpClient) {
      super("http://localhost:5257/api/Products", http)
     }

  filterData = new BehaviorSubject<Filters>({});

  searching = new BehaviorSubject<string>('');

  getProducts(filters: Filters){
     return this.http.post<Product[]>(this.productUrl, filters);
  }
}
