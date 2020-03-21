import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-sniff',
  templateUrl: './sniff.component.html',
  styleUrls: ['./sniff.component.scss'],
})
export class SniffComponent implements OnInit {
  sniff: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('sniff', this.sniff);
    this.router.navigateByUrl('/questions/nrw', { replaceUrl: true });
  }
}
