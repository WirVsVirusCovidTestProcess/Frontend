import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-cough',
  templateUrl: './cough.component.html',
  styleUrls: ['./cough.component.scss'],
})
export class CoughComponent implements OnInit {
  cough: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('cough', this.cough);
    setTimeout(() => {
      this.router.navigateByUrl('/questions/symptom-sniff', { replaceUrl: true });
    }, 400);
  }
}
