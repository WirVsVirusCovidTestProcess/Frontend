import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import {Platform} from '@ionic/angular';

import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {Storage} from '@ionic/storage';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  availableLanguages = ['de', 'en'];
  dark = false;

  constructor(
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private translateService: TranslateService,
    private location: Location
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    if (['/qr-code', '/account'].includes(this.location.path())) {
      return;
    }
    this.storage.get('user').then(res => {
      if (res) {
        this.router.navigateByUrl('/account', {replaceUrl: true});
      }
    });

    this.storage.get('id').then(res => {
      if (res) {
        this.router.navigateByUrl('/about/what-now', {replaceUrl: true});
      }
    });
  }

  isLanguageSelected(lang: string): boolean {
    return this.translateService.currentLang === lang;
  }

  changeLanguage(lang: string): void {
    this.translateService.use(lang);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translateService.setDefaultLang('en');
      this.translateService.use(this.availableLanguages[0]);
    });
  }
}
