import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';
import {QuestionnaireDataService} from '../../services/questionnaireData.service';

@Component({
  selector: 'show-qr-code',
  templateUrl: 'show-qr-code.html',
  styleUrls: ['./show-qr-code.scss'],
})
export class ShowQrCodePage {
  questionnaireDataXML: string;

  constructor(
    public menu: MenuController,
    public router: Router,
    private questionnaireDataService: QuestionnaireDataService,
  ) {}

  closeView() {
    this.router
      .navigateByUrl('/app/tabs/schedule', { replaceUrl: true });
  }

  ionViewWillEnter() {
    this.menu.enable(false);
    this.getQuestionnaireData();
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

  getQuestionnaireData() {
    this.questionnaireDataXML = this.questionnaireDataService.toXML();
  }
}
