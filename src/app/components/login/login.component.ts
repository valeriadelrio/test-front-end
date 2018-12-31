import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import alertify from 'alertifyjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  constructor(private authService: AuthService,
              private translate: TranslateService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
            this.user = user;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .catch(err => alertify.error(
        this.translate.instant('login_error_message', {
          message: err,
        })
      ));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .catch(err => alertify.error(
        this.translate.instant('login_error_message', {
          message: err,
        })
      ));
  }

}
