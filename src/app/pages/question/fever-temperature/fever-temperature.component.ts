import { Component, OnInit } from '@angular/core';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fever-temperature',
  templateUrl: './fever-temperature.component.html',
  styleUrls: ['./fever-temperature.component.scss'],
})
export class FeverTemperatureComponent implements OnInit {
  fevertemperature: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('fever-temperature', this.fevertemperature);
    this.router.navigateByUrl('/questions/nrw', { replaceUrl: true });
  }
}
