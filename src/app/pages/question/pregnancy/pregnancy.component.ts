import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-pregnancy',
  templateUrl: './pregnancy.component.html',
  styleUrls: ['./pregnancy.component.scss'],
})
export class PregnancyComponent implements OnInit {
  pregnancy: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('pregnancy', this.pregnancy);
    this.router.navigateByUrl('/questions/factor-cortisol', { replaceUrl: true });
  }
}
