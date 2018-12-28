import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
@Component({
  selector: 'app-panel-user',
  templateUrl: './panel-user.component.html',
  styleUrls: ['./panel-user.component.scss']
})
export class PanelUserComponent implements OnInit {
  user: SocialUser;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log('user en panel',this.user);
});

  }
  signOut(): void {
    this.authService.signOut();
  }
}
