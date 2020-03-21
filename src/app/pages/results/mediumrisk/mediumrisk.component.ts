import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-norisk',
  templateUrl: './mediumrisk.component.html'
})
export class MediumriskComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {}
}
