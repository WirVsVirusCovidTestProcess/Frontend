import {Component, OnInit} from '@angular/core';
import {FLOW_RELEVANT_IDS, MAX_STEP_NUMBER, Question, questions} from '../../types/questions';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionnaireDataService} from '../../services/questionnaireData.service';
import {formatDate} from '../../util';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
  styleUrls: ['./question.scss'],
})
export class QuestionPage implements OnInit {
  question: Question;
  selectedOptionIndex: any;
  selectedDate: Date;
  maxDate = new Date().toISOString();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private surveyService: QuestionnaireDataService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.getQuestionConfig(id);
    });
  }

  getQuestionConfig(id: string): void {
    this.question = questions.find((q) => q.id === id);
    if (!this.question) {
      this.router.navigateByUrl('');
    }
    this.selectedOptionIndex = undefined;
    this.selectedDate = undefined;
  }

  getHasSelectedOption(): boolean {
    return this.selectedOptionIndex >= 0 || !!this.selectedDate;
  }

  submit(): void {
    if (this.getHasSelectedOption()) {
      this.saveAnswer();
      this.redirectToNextPage();
    }
  }

  getProgressPercentage(): number {
    return this.question.stepNumber / (MAX_STEP_NUMBER + 1);
  }

  getScore(): string {
    if (this.question.inputType === 'radio') {
      if (this.question.scoreMap && this.question.scoreMap.length > this.selectedOptionIndex) {
        return this.question.scoreMap[this.selectedOptionIndex].toString();
      } else {
        return this.selectedOptionIndex.toString();
      }
    } else if (this.question.inputType === 'date') {
      return this.getDateString();
    } else {
      throw new Error('Unkown Question config type');
    }
  }

  getDateString(): string {
    return formatDate(this.selectedDate);
  }

  saveAnswer(): void {
    this.surveyService.setAnswer(this.question.id, this.getScore());
  }

  redirectToNextPage(): void {
    const nextQuestions = this.question.nextQuestions;
    let nextURL: string;
    if (Array.isArray(nextQuestions)) {
      if (nextQuestions.length === 0) {
        throw new Error('Invalid Question Config: Empty nextQuestions');
      }
      if (nextQuestions.length <= this.selectedOptionIndex) {
        throw new Error('Invalid Question Config: Invalid nextQuestions Length');
      }
      nextURL = '/questions/' + nextQuestions[this.selectedOptionIndex];
    } else {
      if (nextQuestions === FLOW_RELEVANT_IDS.END) {
        this.surveyService.setComplete();
        nextURL = '/results';
      } else {
        nextURL = '/questions/' + nextQuestions;
      }
    }
    this.router.navigateByUrl(nextURL);
  }
}
