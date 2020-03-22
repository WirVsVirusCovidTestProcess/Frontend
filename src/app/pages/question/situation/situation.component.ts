import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.scss'],
})
export class SituationComponent implements OnInit {
  situation: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('situation', this.situation);
    setTimeout(() => {
    this.router.navigateByUrl('/questions/factor-work', { replaceUrl: true });
    }, 400);
  }
}
