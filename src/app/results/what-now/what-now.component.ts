import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {QuestionnaireDataService} from '../../services/questionnaireData.service';

@Component({
  selector: 'app-what-now',
  templateUrl: './what-now.component.html',
  styleUrls: ['./what-now.component.scss'],
})
export class WhatNowComponent implements OnInit {
  maxCountPolls = 5;

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
    }).catch(() => {
      // Mock
      this.startPollingRiskScore();
    });
  }

  startPollingRiskScore() {
    this.dataService.loadRiskScore().then(() => {
      this.decide();
    })
    .catch(() => {
      if (this.maxCountPolls <= 0) {
        // Mock result
        this.dataService.setMockRiskScore();
        this.decide();
        return;
      }
      this.maxCountPolls--;
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
    this.router.navigateByUrl('/results/better-check-up');
  }

  redirectToGreenlight() {
    this.router.navigateByUrl('/results/good-to-stay-home');
  }
}
