import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: '**',
        redirectTo: ''
      }
    ])
  ],
  exports: [ RouterModule ],
  providers: [
  ],
})

export class AppRouting {}
