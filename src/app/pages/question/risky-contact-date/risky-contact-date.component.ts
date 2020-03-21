import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-risky-contact-date',
  templateUrl: './risky-contact-date.component.html',
  styleUrls: ['./risky-contact-date.component.scss'],
})
export class RiskyContactDateComponent implements OnInit {
  riskycontactdate: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('risky-contact-date', this.riskycontactdate);
    this.router.navigateByUrl('/questions/symptom-fever', { replaceUrl: true });
  }
}
