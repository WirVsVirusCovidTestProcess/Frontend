import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {QuestionnaireDataService} from '../../../services/questionnaireData.service';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {

  constructor(private router: Router, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.clear();
  }

  start() {
    this.router.navigateByUrl('/questions/factors-age', { replaceUrl: true });
  }

}
