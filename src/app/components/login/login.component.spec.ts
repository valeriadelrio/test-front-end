import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatDividerModule, MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService, AuthServiceConfig, SocialUser, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { BehaviorSubject } from 'rxjs';


class AuthServiceStub { 
  authState: BehaviorSubject<SocialUser>
  constructor() { 
    const user = new  SocialUser();
    user.name = 'Nombre Apellido'
    this.authState = new BehaviorSubject<SocialUser>(user);
  }
  signIn() {}
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let auth: AuthService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        TranslateModule.forRoot(),
        MatDividerModule,
        MatCardModule,
        RouterTestingModule
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    auth = TestBed.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signInWithGoogle()', () => {
    const spy = spyOn(auth, 'signIn');
    component.signInWithGoogle();
    expect(spy).toHaveBeenCalledWith(GoogleLoginProvider.PROVIDER_ID);
  });

  it('should call signInWithFB()', () => {
    const spy = spyOn(auth, 'signIn');
    component.signInWithFB();
    expect(spy).toHaveBeenCalledWith(FacebookLoginProvider.PROVIDER_ID);
  });
});
