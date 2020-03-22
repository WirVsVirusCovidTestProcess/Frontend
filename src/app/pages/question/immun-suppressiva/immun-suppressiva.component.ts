import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-immun-suppressiva',
  templateUrl: './immun-suppressiva.component.html',
  styleUrls: ['./immun-suppressiva.component.scss'],
})
export class ImmunSuppressivaComponent implements OnInit {
  immunsuppressiva: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.surveyService.setAnswer('immun-suppressiva', this.immunsuppressiva);
    setTimeout(() => {
    this.router.navigateByUrl('/questions/factor-flushot', { replaceUrl: true });
    }, 400);
  }
}
