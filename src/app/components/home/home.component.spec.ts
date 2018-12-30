import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MatIconModule, MatToolbarModule, MatNavList, MatListModule, MatSidenavModule, MatPaginatorModule, MatTooltipModule, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';
import { PanelUserComponent } from '../panel-user/panel-user.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { ResourcesComponent } from '../resources/resources.component';
import { SearchComponent } from '../search/search.component';
import { PaginatePipe } from 'src/app/pipes/paginate.pipe';
import { RowTableComponent } from '../row-table/row-table.component';
import { IconsTableComponent } from '../icons-table/icons-table.component';
import { AuthService, SocialUser } from 'angularx-social-login';
import { BehaviorSubject } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from 'src/app/shared/services/posts.service';
import { PostsServiceStub } from 'src/app/shared/services/posts.service.stub';

class AuthServiceStub { 
  authState: BehaviorSubject<SocialUser>
  constructor() { 
    const user = new  SocialUser();
    user.name = 'Nombre Apellido'
    this.authState = new BehaviorSubject<SocialUser>(user);
  }
  signOut() {}
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let auth: AuthService;
  let posts: PostsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        PanelUserComponent,
        HeaderComponent,
        ResourcesComponent,
        SearchComponent,
        PaginatePipe,
        RowTableComponent,
        IconsTableComponent
       ],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MatIconModule,
        MatTooltipModule,
        MatToolbarModule,
        MatListModule,
        MatPaginatorModule,
        MatSidenavModule,
        TranslateModule.forRoot(),
        MatDialogModule
      ],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        { provide: AuthService, useClass: AuthServiceStub},
        { provide: PostsService, useClass: PostsServiceStub}


      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    auth = TestBed.get(AuthService);
    posts = TestBed.get(PostsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
