import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
  RouterLink,
  CanActivateChild
} from '@angular/router';
import * as _ from 'lodash';
import { Observable } from 'rxjs';


import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';


@Injectable()
export class LoggedGuard implements CanActivate, CanActivateChild {
  data: any;
  user: SocialUser;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private authService: AuthService
  ) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (user !== null) {
        router.navigate(['resources']);
      }
      if (user === null) {
        router.navigate(['login']);
      }
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (route.routeConfig.path === 'login' && this.user !== null) {
      this.router.navigate(['resources']);
    }
    return !!this.user || route.routeConfig.path === 'login';
  }
}
