import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-short-breath',
  templateUrl: './short-breath.component.html',
  styleUrls: ['./short-breath.component.scss'],
})
export class ShortBreathComponent implements OnInit {
  shortbreath: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('short-breath', this.shortbreath);
    this.router.navigateByUrl('/questions/symptom-duration', { replaceUrl: true });
  }
}
