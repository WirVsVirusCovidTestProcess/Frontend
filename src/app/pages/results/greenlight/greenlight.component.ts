import { Component, OnInit } from '@angular/core';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greenlight',
  templateUrl: './greenlight.component.html',
  styleUrls: ['./greenlight.component.scss'],
})
export class GreenlightComponent implements OnInit {

  constructor(
    private router: Router,
    private questionnaireDataService: QuestionnaireDataService
  ) { }

  ngOnInit() {}

  startOver(): void {
    this.questionnaireDataService.clearQuestionnaire();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
