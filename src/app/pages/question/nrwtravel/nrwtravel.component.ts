import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-nrwtravel',
  templateUrl: './nrwtravel.component.html',
  styleUrls: ['./nrwtravel.component.scss'],
})
export class NrwtravelComponent implements OnInit {
  nrwtravel: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('nrwtravel', this.nrwtravel);

    setTimeout(() => {
    if (this.nrwtravel == 0) {
    this.router.navigateByUrl('/questions/travel-nrw-return', { replaceUrl: true });
  } else {
    this.router.navigateByUrl('/questions/transfer-contact', { replaceUrl: true });
  }
    }, 400);
  }
}
