import { Injectable } from '@angular/core';
import { QuestionnaireAnswer } from '../types/questionnaireAnswer';
import { Storage } from '@ionic/storage';

const mockAnswers = [{
  key: 'contact',
  value: 0,
}, {
  key: 'other',
  value: 1,
}, {
  key: 'test',
  value: 2,
}, {
  key: 'invalid',
  value: 0,
}];

// Define mapping between questionnaire keys and xml keys
const answerKeyXMLMap: Map<string, string> = new Map<string, string>([
  ['contact', 'A'],
  ['other', 'B'],
]);

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireDataService {
  private answers: Map<string, any>;
  private id?: string;
  private storage: Storage;

  constructor(
    offlineStorage: Storage,
  ) {
    this.storage = offlineStorage;
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
    // TODO send answers to backend
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
