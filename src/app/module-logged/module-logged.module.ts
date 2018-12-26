import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { TranslateModule } from '@ngx-translate/core';
import { ModuleLoggedRoutes } from './module-logged.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components


@NgModule({
  imports: [
    CommonModule,
    ModuleLoggedRoutes,
    // Module
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ],
  declarations: [
  ]
})
export class LoggedModule { }
