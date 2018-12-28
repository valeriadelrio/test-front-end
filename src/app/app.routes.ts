import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoggedGuard } from './guard/logged.guard';
import { ResourcesComponent } from './module-logged/component/resources/resources.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        canActivate: [LoggedGuard],
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
  exports: [ RouterModule ],
  providers: [LoggedGuard],
})

export class AppRouting {}
