import {Injectable} from '@angular/core';
import {QuestionnaireAnswer} from '../types/questionnaireAnswer';
import {Storage} from '@ionic/storage';
import {HttpClient} from '@angular/common/http';
import {QUESTION_XML_MAP} from '../types/questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireDataService {
  private answers: Map<string, any>;
  private id?: string;
  private riskScore?: number;

  constructor(
    private storage: Storage,
    private http: HttpClient
  ) {
    this.answers = new Map<string, any>();

    // Load answers from storage
    this.storage.get('questionnaire_answers').then((values: QuestionnaireAnswer[]) => {
      if (!values || values.length === 0) {
        values = [];
      }
      values.forEach((value) => {
        this.answers.set(value.key, value.value);
      });
    });
    this.storage.get('id').then((id) => {
      if (id) {
        this.id = id;
      }
    });
    this.storage.get('riskScore').then((riskScore) => {
      if (riskScore) {
        this.riskScore = riskScore;
      }
    });
  }

  private static convertAnswerToXML(answer: QuestionnaireAnswer): string {
    const code = QUESTION_XML_MAP.get(answer.key) || answer.key;
    return `<${code}>${answer.value}</${code}>`;
  }

  private getAnswers(): QuestionnaireAnswer[] {
    const result: QuestionnaireAnswer[] = [];
    this.answers.forEach((value, key) => {
      result.push({
        key,
        value
      });
    });
    return result;
  }

  public deleteAllAnswers(): void {
    this.answers.clear();
    this.id = undefined;
    this.saveToStorage();
  }

  public setAnswer(key: string, value: any): void {
    this.answers.set(key, value);
    this.saveToStorage();
  }

  public hasAnswer(key: string): boolean {
    return this.answers.has(key);
  }

  public deleteAnswer(key: string): void {
    this.answers.delete(key);
    this.saveToStorage();
  }

  public setId(id: string): void {
    this.id = id;
    this.saveToStorage();
  }

  public getRiskScore(): number | undefined {
    return this.riskScore;
  }

  private saveToStorage(): void {
    this.storage.set('questionnaire_answers', this.getAnswers());
    this.storage.set('id', this.id);
    this.storage.set('riskScore', this.riskScore);
  }

  public hasAnswers(): boolean {
    return this.answers.size > 0;
  }

  public sendAnswers(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('https://covid-functionapp.azurewebsites.net/api/SaveQuestionData?code=hM41ZqXlPp8kVnGgujM0daabAH0BQ46uDCX8y51XRPztfqn6CSMLAA==', {
        Answers: this.toJSON()
      }, {responseType: 'text'})
        .subscribe(response => {
          this.setId(response);
          resolve(response);
        }, error => {
          console.error(error);
          reject(error);
        });
    });
  }

  public loadRiskScore(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('https://covid-functionapp.azurewebsites.net/api/GetDataFromToken?code=hM41ZqXlPp8kVnGgujM0daabAH0BQ46uDCX8y51XRPztfqn6CSMLAA==', {
        Token: this.id
      }).subscribe((data: any) => {
        if (!data.riskScore) {
          reject('RiskScore not available yet');
        } else {
          this.riskScore = data.riskScore;
          this.saveToStorage();
          resolve(data.riskScore);
        }
      }, (error) => {
        console.error(error);
        this.setMockRiskScore();
        reject(error);
      });
    });
  }

  public setMockRiskScore(): void {
    this.riskScore = 30;
    this.saveToStorage();
  }

  public getId(): string {
    return this.id;
  }

  public toString(): string {
    return this.getAnswers().map(answer => `<${answer.key}>${answer.value}</${answer.key}>`).join('; ');
  }

  public toJSON(): any {
    return this.getAnswers().map((answer) => {
      const code = QUESTION_XML_MAP.get(answer.key);
      if (!code || code.length === 0 || !answer.value) {
        return undefined;
      }
      return {[code]: answer.value};
    }).filter(a => !!a);
  }

  public toXML(): string {
    return `<PATIENT>${this.getAnswers().map(QuestionnaireDataService.convertAnswerToXML).join('')}</PATIENT>`;
  }
}
