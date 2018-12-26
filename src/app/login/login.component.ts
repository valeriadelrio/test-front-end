import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService } from '../shared/services/validator.service';
import * as alertify from 'alertifyjs';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userToLogin: FormGroup;
  constructor(private translate: TranslateService,
              private _authService: AuthService) { }

  ngOnInit() {
    this.autoFill();
  }

  autoFill() {
    this.userToLogin = new FormGroup({
      'email': new FormControl('', Validators.required, ValidatorService.emailValidator),
      'password': new FormControl('', Validators.required)
    });
  }

  loginUser(value, valid) {
    if (valid) {
      this._authService.signUp(value).subscribe((response) => {
        console.log(response);
      }, (error: any) => {
        alertify.alert((error.status) ? error.message : 'Error', error.error.toString().replace(',', '\n') || 'Error message')
          .set('label', this.translate.instant('accept'));
      });
    }
  }

}
