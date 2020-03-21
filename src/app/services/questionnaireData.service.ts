import { Injectable } from '@angular/core';
import { QuestionnaireAnswer } from '../types/questionnaireAnswer';
import { Storage } from '@ionic/storage';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const mockAnswers = [{
  key: 'age',
  value: 0,
}, {
  key: 'situation',
  value: 1,
}, {
  key: 'work',
  value: 2,
}, {
  key: 'lung-disease',
  value: 0,
}];

// Define mapping between questionnaire keys and xml keys
const answerKeyXMLMap: Map<string, string> = new Map<string, string>([
  ['age', 'A'],
  ['situation', 'B'],
  ['work', 'C'],
  ['smoking', 'D'],
  ['generaltravel', 'E'],
  ['nrwtravel', 'F'],
  ['nrw-travel-return', 'R1'],
  ['travel-global', 'G'],
  ['risky-travel', 'H'],
  ['risky-contact', 'Q'],
  ['risky-contact-date', 'B8'],
  ['fever', 'T'],
  ['fever-temperature', 'V'],
  ['chills', 'W'],
  ['listless', 'X'],
  ['body-ache', 'Y'],
  ['cough', 'Z'],
  ['sniff', 'A0'],
  ['diarrhea', 'A1'],
  ['sore-throat', 'A2'],
  ['head-ache', 'A3'],
  ['short-breath', 'B7'],
  ['symptoms-duration', 'B9'],
  ['lung-disease', 'A5'],
  ['diabetes', 'A6'],
  ['heart-disease', 'A7'],
  ['obesity', 'A8'],
  ['pregnancy', 'A9'],
  ['cortisol', 'B0'],
  ['immun-suppressiva', 'B1'],
  ['flu-shot', 'B2'],
  ['suspect-contact', 'R0'],
  ['suspect-contact-date', 'B8'],
  ['fever-temperature', 'unkown'], // could not get to question in cov app to get the code
]);

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireDataService {
  private answers: Map<string, any>;
  private id?: string;

  constructor(
    private storage: Storage,
    private http: HttpClient
  ) {
    this.answers = new Map<string, any>();

    // Load answers from storage
    this.storage.get('questionnaire_answers').then((values: QuestionnaireAnswer[]) => {
      // mock answers
      if (!values || values.length === 0) {
        values = mockAnswers;
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
  }

  private static convertAnswerToXML(answer: QuestionnaireAnswer): string {
    const code = answerKeyXMLMap.get(answer.key) || answer.key;
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

  private saveToStorage(): Promise<any> {
    return Promise.all([
      this.storage.set('id', this.id),
      this.storage.set('questionnaire_answers', this.getAnswers()),
    ]);
  }

  public hasAnswers(): boolean {
    return this.answers.size > 0;
  }

  public sendAnswers(): void {
    this.http.post('https://covid-testprocess.azurewebsites.net/api/SaveQuestionData?code=hM41ZqXlPp8kVnGgujM0daabAH0BQ46uDCX8y51XRPztfqn6CSMLAA==', {})
      .subscribe((res) => console.log(res));
  }

  public toString(): string {
    return this.getAnswers().map(answer => `<${answer.key}>${answer.value}</${answer.key}>`).join('; ');
  }

  public toJSON(): any {
    return this.getAnswers().reduce((result, answer) => {
      const code = answerKeyXMLMap.get(answer.key) || answer.key;
      result[code] = answer.value;
      return result;
    }, {});
  }

  public toXML(): string {
    return `<Patient>${this.getAnswers().map(QuestionnaireDataService.convertAnswerToXML).join('')}</Patient>`;
  }
}
