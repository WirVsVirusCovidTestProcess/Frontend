import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';
import {formatDate} from '../../../util';

@Component({
  selector: 'app-nrw-travel-return',
  templateUrl: './nrw-travel-return.component.html',
  styleUrls: ['./nrw-travel-return.component.scss'],
})
export class NrwTravelReturnComponent implements OnInit {
  nrwtravelreturn = new Date().toISOString();

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  update(event) {

  }

  submit() {
    this.surveyService.setAnswer('nrw-travel-return', formatDate(this.nrwtravelreturn));

    this.router.navigateByUrl('/questions/travel-crossborder', { replaceUrl: true });

  }
}
