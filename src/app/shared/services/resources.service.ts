import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private http: HttpClient ) { }

  public getResource() {
    return this.http.get(this.url);
  }

  public deleteResource(id: number) {
    const url = this.url + `/${id}`;
    return this.http.delete(url);
  }

  public getResourceById(id: number) {
    const url = this.url + `/${id}`;
    return this.http.get(url);
  }
}
