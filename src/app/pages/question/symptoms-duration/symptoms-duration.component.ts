import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-symptoms-duration',
  templateUrl: './symptoms-duration.component.html',
  styleUrls: ['./symptoms-duration.component.scss'],
})
export class SymptomsDurationComponent implements OnInit {
  symptoms: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('symptoms-duration', this.symptoms);
    this.router.navigateByUrl('/questions/factor-lungs', { replaceUrl: true });
  }
}
