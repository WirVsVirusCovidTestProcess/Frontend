import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';
import { SwUpdate } from '@angular/service-worker';
import {formatDate} from '../../../util';

@Component({
  selector: 'app-risky-contact-date',
  templateUrl: './risky-contact-date.component.html',
  styleUrls: ['./risky-contact-date.component.scss'],
})
export class RiskyContactDateComponent implements OnInit {
  riskycontactdate = new Date().toISOString();

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  update(event) {

  }

  submit() {
    this.surveyService.setAnswer('risky-contact-date', formatDate(this.riskycontactdate));
    this.router.navigateByUrl('/questions/symptom-fever', { replaceUrl: true });
  }
}
