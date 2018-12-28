import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resource-aivo';
  langBrowser: string;
  langDefault = 'en';

  constructor(
    public router: Router,
    private translate: TranslateService) {
    this.langBrowser = translate.getBrowserLang();
    if (
      this.langBrowser !== 'en' &&
      this.langBrowser !== 'es'
    ) {
      this.translate.setDefaultLang(this.langDefault);
    } else {
      this.translate.use(this.langBrowser);
      this.translate.setDefaultLang(this.langBrowser);
    }
  }
}
