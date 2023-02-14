import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {

  constructor(
    private url: string, 
    public http: HttpClient
    ) { }

  get(id?: number){
    if(id) {
      return this.http.get(this.url + '?id=' + id);
    }
    else {
      return this.http.get(this.url);
    }
  }

  create(resource){
    return this.http.post(this.url, resource);
  }

  delete(id: number){
    return this.http.delete(this.url + '/' + id);
  }

  update(resource){
    return this.http.patch(this.url, resource);
  }
}
