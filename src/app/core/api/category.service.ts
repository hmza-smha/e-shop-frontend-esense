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
}
