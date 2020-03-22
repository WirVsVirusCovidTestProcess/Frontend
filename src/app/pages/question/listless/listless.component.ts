import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-listless',
  templateUrl: './listless.component.html',
  styleUrls: ['./listless.component.scss'],
})
export class ListlessComponent implements OnInit {
  listless: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('listless', this.listless);
    setTimeout(() => {
    this.router.navigateByUrl('/questions/symptoms-body', { replaceUrl: true });
    }, 400);
  }
}
