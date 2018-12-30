import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NumberSymbol } from '@angular/common';

interface Posts {
  user: any,
  id: number,
  title: string,
  body: string
}
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'http://localhost:3000/posts';

  constructor( private http: HttpClient ) { }

  public getPosts() {
    return this.http.get(this.url);
  }

  public deletePost(id: number) {
    const url = this.url + `/${id}`;
    return this.http.delete(url);
  }

  public getPostById(id: number) {
    const url = this.url + `/${id}`;
    return this.http.get(url);
  }

  public updatePost(id: number, data: Posts) {
    const url = this.url + `/${id}`;
    return this.http.patch(url, data);
  }
}
