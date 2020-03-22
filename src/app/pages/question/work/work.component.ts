import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuestionnaireDataService} from '../../../services/questionnaireData.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  work: 0;

  constructor(private router: Router,
              private surveyService: QuestionnaireDataService) {
  }

  ngOnInit() {
  }

  submit() {
    this.surveyService.setAnswer('work', this.work);
    setTimeout(() => {
      this.router.navigateByUrl('/questions/factors-smoking', {replaceUrl: true});
    }, 400);
  }
}
