import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-fever-duration',
  templateUrl: './fever-duration.component.html',
  styleUrls: ['./fever-duration.component.scss'],
})
export class FeverDurationComponent implements OnInit {
  feverduration: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('fever-duration', this.feverduration);
    this.router.navigateByUrl('/questions/nrw', { replaceUrl: true });
  }
}
