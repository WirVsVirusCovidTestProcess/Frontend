import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {QuestionnaireDataService} from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-what-now',
  templateUrl: './what-now.component.html',
  styleUrls: ['./what-now.component.scss'],
})
export class WhatNowComponent implements OnInit {

  constructor(private router: Router, private dataService: QuestionnaireDataService) { }

  ngOnInit() {
    if (!this.dataService.getRiskScore()) {
      setTimeout(this.sendAnswers.bind(this), 500);
    } else {
      this.decide();
    }
  }

  sendAnswers() {
    this.dataService.sendAnswers().then(() => {
      this.startPollingRiskScore();
    });
  }

  startPollingRiskScore() {
    this.dataService.loadRiskScore().then((risk) => {
      this.decide();
    })
    .catch(() => {
      setTimeout(this.startPollingRiskScore.bind(this), 1000);
    });
  }

  decide() {
    const riskScore = this.dataService.getRiskScore();
    // TODO add correct riskScore decision
    if (riskScore > 4) {
      this.redirectToRiskGroup();
    } else {
      this.redirectToGreenlight();
    }
  }

  redirectToRiskGroup() {
    this.router.navigateByUrl('/about/better-check-up');
  }

  redirectToGreenlight() {
    this.router.navigateByUrl('/about/good-to-stay-home');
  }
}
