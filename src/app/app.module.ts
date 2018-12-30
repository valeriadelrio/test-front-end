import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
// Angular Material
import { MaterialModule } from './material.module';
// Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRouting } from './app.routes';

/// Awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider  } from 'angularx-social-login';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { IconsTableComponent } from './components/icons-table/icons-table.component';
import { ModalResourceComponent } from './components/modal-resource/modal-resource.component';
import { PanelUserComponent } from './components/panel-user/panel-user.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { RowTableComponent } from './components/row-table/row-table.component';
import { SearchComponent } from './components/search/search.component';
import { PaginatePipe } from './pipes/paginate.pipe';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('708399119620-4lelbjac87ho20ou38h3k1dc0kgudepk.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2122537388058894')
  }
]);

export function provideConfig() {
  return config;
}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    IconsTableComponent,
    ModalResourceComponent,
    PanelUserComponent,
    ResourcesComponent,
    RowTableComponent,
    SearchComponent,
    PaginatePipe
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRouting,
    HttpClientModule,
    SocialLoginModule,
    AngularFontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
  ],
  entryComponents: [
    ModalResourceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
