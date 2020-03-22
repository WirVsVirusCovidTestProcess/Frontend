import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';
import {formatDate} from '../../../util';

@Component({
  selector: 'app-symptoms-duration',
  templateUrl: './symptoms-duration.component.html',
  styleUrls: ['./symptoms-duration.component.scss'],
})
export class SymptomsDurationComponent implements OnInit {
  symptoms = new Date().toISOString();

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  update(event) {

  }

  submit() {
    this.surveyService.setAnswer('symptoms-duration', formatDate(this.symptoms));
    this.router.navigateByUrl('/questions/factor-lungs', { replaceUrl: true });
  }
}
