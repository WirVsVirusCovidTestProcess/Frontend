import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-flu-shot',
  templateUrl: './flu-shot.component.html',
  styleUrls: ['./flu-shot.component.scss'],
})
export class FluShotComponent implements OnInit {
  flushot: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('flu-shot', this.flushot);
    this.router.navigateByUrl('/about/what-now', { replaceUrl: true });
  }
}
