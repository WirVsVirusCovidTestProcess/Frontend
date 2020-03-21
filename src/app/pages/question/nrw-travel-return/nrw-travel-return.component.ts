import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-nrw-travel-return',
  templateUrl: './nrw-travel-return.component.html',
  styleUrls: ['./nrw-travel-return.component.scss'],
})
export class NrwTravelReturnComponent implements OnInit {
  nrwtravelreturn: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('nrw-travel-return', this.nrwtravelreturn);
    this.router.navigateByUrl('/questions/nrw', { replaceUrl: true });
  }
}
