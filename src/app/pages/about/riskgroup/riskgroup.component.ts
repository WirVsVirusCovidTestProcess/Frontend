import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireDataService } from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-riskgroup',
  templateUrl: './riskgroup.component.html',
  styleUrls: ['./riskgroup.component.scss'],
})
export class RiskgroupComponent implements OnInit {

  constructor(private router: Router,
              private dataService: QuestionnaireDataService) { }

  ngOnInit() {}

  submit() {
    this.router.navigate(['/signup']);
  }
}
