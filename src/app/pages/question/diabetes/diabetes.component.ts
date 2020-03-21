import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-diabetes',
  templateUrl: './diabetes.component.html',
  styleUrls: ['./diabetes.component.scss'],
})
export class DiabetesComponent implements OnInit {
  diabetes: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('diabetes', this.diabetes);
    this.router.navigateByUrl('/questions/nrw', { replaceUrl: true });
  }
}
