import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = '';

  constructor( private http: HttpClient ) { }

  public signUp(payload) {
    console.log('payload', payload);
    const endpoint = `login`;
    return this.http
      .post(endpoint, payload);
  }

}
