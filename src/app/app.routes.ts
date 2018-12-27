import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'home',
            loadChildren: './module-logged/module-logged.module#LoggedModule'
          },
          {
            path: '**',
            redirectTo: 'login',
            pathMatch: 'full'
          }
        ]
      },
    ])
  ],
  exports: [ RouterModule ]
})

export class AppRouting {}
