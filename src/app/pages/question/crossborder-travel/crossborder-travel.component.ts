import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-crossborder-travel',
  templateUrl: './crossborder-travel.component.html',
  styleUrls: ['./crossborder-travel.component.scss'],
})
export class CrossborderTravelComponent implements OnInit {
  travel: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('crossborder-travel', this.travel);
    if(this.travel == 0) {
      this.router.navigateByUrl('/questions/travel-countries', { replaceUrl: true });
    } else {
      this.router.navigateByUrl('/questions/transfer-contact', { replaceUrl: true });
    }
  }
}
