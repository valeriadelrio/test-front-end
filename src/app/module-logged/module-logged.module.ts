import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { TranslateModule } from '@ngx-translate/core';
import { ModuleLoggedRoutes } from './module-logged.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from '../login/login.component';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelUserComponent } from './component/panel-user/panel-user.component';
import { RowTableComponent } from './component/row-table/row-table.component';
import { IconsTableComponent } from './component/icons-table/icons-table.component';
import { ResourcesComponent } from './component/resources/resources.component';
import { HeaderComponent } from './component/header/header.component';
import { SubHeaderComponent } from './component/sub-header/sub-header.component';
import { SearchComponent } from './component/search/search.component';
import { ModalResourceComponent } from './component/modal-resource/modal-resource.component';

// Components


@NgModule({
  imports: [
    CommonModule,
    ModuleLoggedRoutes,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    HomeComponent,
    PanelUserComponent,
    RowTableComponent,
    IconsTableComponent,
    ResourcesComponent,
    HeaderComponent,
    SubHeaderComponent,
    SearchComponent,
    ModalResourceComponent,
  ],
  entryComponents: [
    ModalResourceComponent
  ]
})
export class LoggedModule { }
