import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';
import {formatDate} from '../../../util';

@Component({
  selector: 'app-suspect-contact-date',
  templateUrl: './suspect-contact-date.component.html',
  styleUrls: ['./suspect-contact-date.component.scss'],
})
export class SuspectContactDateComponent implements OnInit {
  suspectcontact = new Date().toISOString();

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  update(event) {

  }

  submit() {
    this.surveyService.setAnswer('suspect-contact-date', formatDate(this.suspectcontact));
    setTimeout(() => {
    this.router.navigateByUrl('/questions/symptom-fever', { replaceUrl: true });
    }, 400);
  }
}
