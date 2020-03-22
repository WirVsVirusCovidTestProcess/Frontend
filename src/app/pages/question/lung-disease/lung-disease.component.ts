import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-lung-disease',
  templateUrl: './lung-disease.component.html',
  styleUrls: ['./lung-disease.component.scss'],
})
export class LungDiseaseComponent implements OnInit {
  lungdisease: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('lung-disease', this.lungdisease);
    this.router.navigateByUrl('/questions/symptom-diabetes', { replaceUrl: true });
  }
}
