import { Injectable } from '@angular/core';
import { QuestionnaireAnswer } from '../types/questionnaireAnswer';
import { HttpClient } from '@angular/common/http';
import { QUESTION_XML_MAP } from '../types/questions';
import { Store } from '@ngrx/store';
import { State as AppState } from '../state';
import * as QuestionActions from '../state/questions/questions.actions';
import * as QuestionSelectors from '../state/questions/questions.selector';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireDataService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) {
  }

  private static convertAnswerToXML(answer: QuestionnaireAnswer): string {
    const code = QUESTION_XML_MAP.get(answer.key) || answer.key;
    return `<${code}>${answer.value}</${code}>`;
  }

  private getAnswers(): Observable<QuestionnaireAnswer[]> {
    return this.store.select(QuestionSelectors.selectAllAnswers);
  }

  public setAnswer(key: string, value: string): void {
    this.store.dispatch(QuestionActions.saveAnswer({key, value}));
  }

  public setId(id: string): void {
    this.store.dispatch(QuestionActions.setUserId({id}));
  }

  public getRiskScore(): Observable<number | undefined> {
    return this.store.select(QuestionSelectors.selectRiskScore);
  }

  public isComplete(): Observable<boolean> {
    return this.store.select(QuestionSelectors.selectQuestionnaireComplete);
  }

  public setComplete(): void {
    return this.store.dispatch(QuestionActions.setQuestionnaireComplete());
  }

  public sendAnswers(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.toJSON().subscribe((answers) => {
        this.http.post('https://covid-functionapp.azurewebsites.net/api/SaveQuestionData?code=hM41ZqXlPp8kVnGgujM0daabAH0BQ46uDCX8y51XRPztfqn6CSMLAA==', {
          Answers: answers
        }, {responseType: 'text'})
          .subscribe(response => {
            this.setId(response);
            resolve(response);
          }, error => {
            console.error(error);
            reject(error);
          });
      });
    });
  }

  public loadRiskScore(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getId().subscribe((id) => {
        this.http.post('https://covid-functionapp.azurewebsites.net/api/GetDataFromToken?code=hM41ZqXlPp8kVnGgujM0daabAH0BQ46uDCX8y51XRPztfqn6CSMLAA==', {
          Token: id
        }).subscribe((data: any) => {
          if (!data.riskScore) {
            reject('RiskScore not available yet');
          } else {
            this.setRiskScore(data.riskScore);
            resolve(data.riskScore);
          }
        }, (error) => {
          console.error(error);
          this.setMockRiskScore();
          reject(error);
        });
      });
    });
  }

  public setRiskScore(riskScore: number): void {
    this.store.dispatch(QuestionActions.setRiskScore({riskScore}));
  }

  public setMockRiskScore(): void {
    this.setRiskScore(30);
  }

  public getId(): Observable<string | undefined> {
    return this.store.select(QuestionSelectors.selectUserId);
  }

  public toString(): Observable<string> {
    return this.getAnswers().pipe(map(answers => answers.map(answer => `<${answer.key}>${answer.value}</${answer.key}>`).join('; ')));
  }

  public toJSON(): Observable<Record<string, string>> {
    return this.getAnswers().pipe(
      map((answers) => {
        return answers.reduce((acc, answer: QuestionnaireAnswer): Record<string, string> => {
          const code = QUESTION_XML_MAP.get(answer.key);
          if (!code || code.length === 0 || !answer.value) {
            return acc;
          }
          return {
            ...acc,
            [code]: answer.value
          };
        }, {});
      })
    );
  }

  public toXML(): Observable<string> {
    return this.getAnswers().pipe(
      map((answers) => {
        const arr = answers.map(QuestionnaireDataService.convertAnswerToXML);
        return `<PATIENT>${arr.join('')}</PATIENT>`;
      })
    );
  }

  public clearQuestionnaire(): void {
    return this.store.dispatch(QuestionActions.resetQuestionnaire());
  }
}
