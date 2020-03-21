import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-suspect-contact-date',
  templateUrl: './suspect-contact-date.component.html',
  styleUrls: ['./suspect-contact-date.component.scss'],
})
export class SuspectContactDateComponent implements OnInit {
  suspectcontact: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('suspect-contact-date', this.suspectcontact);
    this.router.navigateByUrl('/questions/nrw', { replaceUrl: true });
  }
}
