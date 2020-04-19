import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserOptions } from '../types/user-options';
import { UserdataService } from './userdata.service';
import { Store } from '@ngrx/store';
import { State as AppState } from '../state';
import * as QuestionActions from '../state/questions/questions.actions';

@Injectable({
  providedIn: 'root'
})
export class UserData {
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    public storage: Storage,
    public userData: UserdataService,
    private store: Store<AppState>
  ) { }

  retrieve(): Promise<UserOptions> {
    return new Promise<UserOptions>((resolve, reject) => {
      resolve(this.storage.get('user'));
    });
  }

  contactCache(): Promise<Array<string>> {
    return new Promise<Array<string>>((resolve, reject) => {
      resolve(this.storage.get('contacts'));
    });
  }

  cacheContacts(contacts: Array<string>) {
    this.storage.set('contacts', contacts);
  }

  clearCaches() {
    this.storage.remove('user');
    this.storage.remove('contacts');

    this.store.dispatch(QuestionActions.resetQuestionnaire());
  }

  signup(user: UserOptions) {
    this.storage.set('user', user);
    this.userData.saveUser(user);
    // TODO: Save Token
  }
}
