import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-heart-disease',
  templateUrl: './heart-disease.component.html',
  styleUrls: ['./heart-disease.component.scss'],
})
export class HeartDiseaseComponent implements OnInit {
  heartdisease: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('heart-disease', this.heartdisease);
    setTimeout(() => {
      this.router.navigateByUrl('/questions/factor-obesity', { replaceUrl: true });
    }, 400);
  }
}
