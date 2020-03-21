import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-body-ache',
  templateUrl: './body-ache.component.html',
  styleUrls: ['./body-ache.component.scss'],
})
export class BodyAcheComponent implements OnInit {
  bodyache: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('body-ache', this.bodyache);
    this.router.navigateByUrl('/questions/nrw', { replaceUrl: true });
  }
}
