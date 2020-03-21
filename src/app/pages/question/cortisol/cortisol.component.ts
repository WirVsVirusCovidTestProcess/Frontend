import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-cortisol',
  templateUrl: './cortisol.component.html',
  styleUrls: ['./cortisol.component.scss'],
})
export class CortisolComponent implements OnInit {
  cortisol: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('cortisol', this.cortisol);
    this.router.navigateByUrl('/questions/nrw', { replaceUrl: true });
  }
}
