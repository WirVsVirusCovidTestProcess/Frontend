import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-norisk',
  templateUrl: './highrisk.component.html'
})
export class HighriskComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {}
}
