import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-risky-travel',
  templateUrl: './risky-travel.component.html',
  styleUrls: ['./risky-travel.component.scss'],
})
export class RiskyTravelComponent implements OnInit {
  riskycontact: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('risky-travel', this.riskycontact);
    this.router.navigateByUrl('/questions/nrw', { replaceUrl: true });
  }
}
