import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-suspect-contact',
  templateUrl: './suspect-contact.component.html',
  styleUrls: ['./suspect-contact.component.scss'],
})
export class SuspectContactComponent implements OnInit {
  suspectcontact: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('suspect-contact', this.suspectcontact);
    setTimeout(() => {
    this.router.navigateByUrl('/questions/suspect-contact-date', { replaceUrl: true });
    }, 400);
  }
}
