import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-risky-travel',
  templateUrl: './risky-travel.component.html',
  styleUrls: ['./risky-travel.component.scss'],
})
export class RiskyTravelComponent implements OnInit {
  riskytravel: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('risky-travel', this.riskytravel);

    this.router.navigateByUrl('/questions/transfer-contact', { replaceUrl: true });
  }
}
