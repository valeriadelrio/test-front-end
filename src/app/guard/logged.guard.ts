import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
  RouterLink
} from '@angular/router';
import * as _ from 'lodash';
import { Observable } from 'rxjs';


import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';


@Injectable()
export class LoggedGuard implements CanActivate {
  data: any;
  user: SocialUser;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private storage: Storage,
    private authService: AuthService
  ) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
});
    this.storage.setItem('token', this.user.authToken);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('aca esto en logged');
    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('en el child');
   return null;
  }
}
