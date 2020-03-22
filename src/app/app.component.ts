import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, Platform } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  // appPages = [
  //   {
  //     title: 'Schedule',
  //     url: '/app/tabs/schedule',
  //     icon: 'calendar'
  //   },
  //   {
  //     title: 'Speakers',
  //     url: '/app/tabs/speakers',
  //     icon: 'people'
  //   },
  //   {
  //     title: 'Map',
  //     url: '/app/tabs/map',
  //     icon: 'map'
  //   },
  //   {
  //     title: 'About',
  //     url: '/app/tabs/about',
  //     icon: 'information-circle'
  //   }
  // ];
  // loggedIn = false;
  dark = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage
  ) {
    this.initializeApp();
  }

 async ngOnInit() {
  this.storage.get('user').then(res => {
    this.router.navigateByUrl('/account', { replaceUrl: true });
  });

  this.storage.get('id').then(res => {
    this.router.navigateByUrl('/signup', { replaceUrl: true });
  });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openQrCodeView() {
    this.menu.enable(false);
    this.router.navigateByUrl('/qr-code');
  }
}
