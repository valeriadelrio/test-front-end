import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelUserComponent } from './panel-user.component';
import { MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { BehaviorSubject } from 'rxjs';

class AuthServiceStub { 
  authState: BehaviorSubject<SocialUser>
  constructor() { 
    const user = new  SocialUser();
    user.name = 'Nombre Apellido'
    this.authState = new BehaviorSubject<SocialUser>(user);
  }
  signOut() {}
}

describe('PanelUserComponent', () => {
  let component: PanelUserComponent;
  let fixture: ComponentFixture<PanelUserComponent>;
  let auth: AuthService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelUserComponent ],
      imports: [
        TranslateModule.forRoot(),
        MatIconModule
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelUserComponent);
    component = fixture.componentInstance;
    auth = TestBed.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signOut()', () => {
    const spy = spyOn(auth, 'signOut');
    component.signOut();
    expect(spy).toHaveBeenCalled();
  });

  
});
