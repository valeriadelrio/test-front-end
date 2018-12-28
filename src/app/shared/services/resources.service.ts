import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private http: HttpClient ) { }

  public getResource() {
    // const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(this.url);
    // return fetch(url);
  }

  public deleteResource(id: number) {
    const url = this.url + `/${id}`;
    console.log('url del delete', url);
    return this.http.delete(url);
  }
}
