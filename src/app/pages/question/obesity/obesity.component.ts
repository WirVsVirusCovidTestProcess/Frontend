import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-obesity',
  templateUrl: './obesity.component.html',
  styleUrls: ['./obesity.component.scss'],
})
export class ObesityComponent implements OnInit {
  obesity: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('obesity', this.obesity);
    this.router.navigateByUrl('/questions/factor-pregnancy', { replaceUrl: true });
  }
}
