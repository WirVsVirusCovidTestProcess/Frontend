import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-risky-contact',
  templateUrl: './risky-contact.component.html',
  styleUrls: ['./risky-contact.component.scss'],
})
export class RiskyContactComponent implements OnInit {
  riskycontact: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('risky-contact', this.riskycontact);
    this.router.navigateByUrl('/questions/nrw', { replaceUrl: true });
  }
}
