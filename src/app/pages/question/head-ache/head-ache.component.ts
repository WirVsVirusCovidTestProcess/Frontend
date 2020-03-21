import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-head-ache',
  templateUrl: './head-ache.component.html',
  styleUrls: ['./head-ache.component.scss'],
})
export class HeadAcheComponent implements OnInit {
  headache: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('head-ache', this.headache);
    this.router.navigateByUrl('/questions/nrw', { replaceUrl: true });
  }
}
