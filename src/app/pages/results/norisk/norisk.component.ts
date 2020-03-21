import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-norisk',
  templateUrl: './norisk.component.html'
})
export class NoriskComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {}
}
