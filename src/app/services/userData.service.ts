import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserOptions } from '../types/user-options';
import { Store } from '@ngrx/store';
import { State as AppState } from '../state';
import * as QuestionActions from '../state/questions/questions.actions';
import * as UserDataActions from '../state/userData/userData.actions';
import { HttpClient } from '@angular/common/http';
import * as UserDataSelectors from '../state/userData/userData.selector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(
    public storage: Storage,
    private store: Store<AppState>,
    private http: HttpClient
  ) { }

  getUserData(): Observable<UserOptions> {
    return this.store.select(UserDataSelectors.selectUserData);
  }

  getContactPersons(): Observable<Array<string>> {
    return this.store.select(UserDataSelectors.selectContactPersons);
  }

  saveContactPersons(contactPersons: Array<string>): void {
    this.store.dispatch(UserDataActions.setContactPersons({ contactPersons }));
  }

  clearData() {
    this.store.dispatch(UserDataActions.clearUserData());
    this.store.dispatch(QuestionActions.resetQuestionnaire());
  }

  signup(user: UserOptions): Promise<any> {
    this.store.dispatch(UserDataActions.storeUserData({ data: user }));
    return this.sendUserData(user);
  }

  public sendUserData(user: UserOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('https://covid-functionapp.azurewebsites.net/api/AddUserInformation?code=hM41ZqXlPp8kVnGgujM0daabAH0BQ46uDCX8y51XRPztfqn6CSMLAA==',
        {
          FirstName: user.name,
          LastName: user.name,
          Email: user.email,
          Location: user.street + ' ' + user.area
        }, { responseType: 'text' })
        .subscribe(response => {
          resolve(response);
        });
    });
  }
}
