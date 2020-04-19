import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { MenuController } from '@ionic/angular';
import {QuestionnaireDataService} from '../../services/questionnaireData.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'show-qr-code',
  templateUrl: 'show-qr-code.html',
  styleUrls: ['./show-qr-code.scss'],
})
export class ShowQrCodePage {
  questionnaireDataXML: Observable<string>;

  constructor(
    public menu: MenuController,
    public location: Location,
    private questionnaireDataService: QuestionnaireDataService,
  ) {}

  closeView() {
    this.location.back();
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
