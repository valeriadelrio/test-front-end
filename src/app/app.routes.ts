import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoggedGuard } from './guard/logged.guard';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'login',
        canActivate: [LoggedGuard],
        component: LoginComponent,
      },
      {
        path: 'resources',
        canActivate: [LoggedGuard],
        component: HomeComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [ RouterModule ],
  providers: [LoggedGuard],
})

export class AppRouting {}
