import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-chills',
  templateUrl: './chills.component.html',
  styleUrls: ['./chills.component.scss'],
})
export class ChillsComponent implements OnInit {
  chills: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('chills', this.chills);
    this.router.navigateByUrl('/questions/nrw', { replaceUrl: true });
  }
}
