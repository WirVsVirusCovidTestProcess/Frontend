import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'show-qr-code',
  templateUrl: 'show-qr-code.html',
  styleUrls: ['./show-qr-code.scss'],
})
export class ShowQrCodePage {
  constructor(
    public menu: MenuController,
    public router: Router
  ) {}

  closeView() {
    this.router
      .navigateByUrl('/app/tabs/schedule', { replaceUrl: true });
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
