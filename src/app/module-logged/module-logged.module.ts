import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { TranslateModule } from '@ngx-translate/core';
import { ModuleLoggedRoutes } from './module-logged.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from '../login/login.component';
import { MaterialModule } from '../material.module';

// Components


@NgModule({
  imports: [
    CommonModule,
    ModuleLoggedRoutes,
    MaterialModule,
    // Module
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    HomeComponent,
  ]
})
export class LoggedModule { }
