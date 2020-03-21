import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-fever',
  templateUrl: './fever.component.html',
  styleUrls: ['./fever.component.scss'],
})
export class FeverComponent implements OnInit {
  fever: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('fever', this.fever);
    this.router.navigateByUrl('/questions/nrw', { replaceUrl: true });
  }
}
