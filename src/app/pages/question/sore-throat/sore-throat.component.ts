import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-sore-throat',
  templateUrl: './sore-throat.component.html',
  styleUrls: ['./sore-throat.component.scss'],
})
export class SoreThroatComponent implements OnInit {
  sorethroat: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('sore-throat', this.sorethroat);
    this.router.navigateByUrl('/questions/symptom-head', { replaceUrl: true });
  }
}
