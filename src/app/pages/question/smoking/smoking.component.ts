import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-smoking',
  templateUrl: './smoking.component.html',
  styleUrls: ['./smoking.component.scss'],
})
export class SmokingComponent implements OnInit {
  smoking: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('smoking', this.smoking);
    this.router.navigateByUrl('/questions/factor-work', { replaceUrl: true });
  }
}
