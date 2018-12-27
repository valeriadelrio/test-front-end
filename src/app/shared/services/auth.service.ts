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

  // logOut() {
  //   const endpoint = `logOut`;
  //   return this.http
  //     .post(endpoint, null)
  //     .toPromise()
  //     .then((response: any) => {
  //       if (response.status === 200) {
  //         this.cookieService.set(
  //           'Token',
  //           'expired',
  //           null,
  //           '/',
  //           environment.cookieDom
  //         );
  //         this.storageService.store('loggedIn', 'false');
  //       }
  //       this.cookieService.delete('Token');
  //     });
  // }

}
