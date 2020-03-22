import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserOptions } from '../interfaces/user-options';
import { UserdataService } from '../services/userdata.service';

@Injectable({
  providedIn: 'root'
})
export class UserData {
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    public storage: Storage,
    public userData: UserdataService
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

    this.storage.remove('questionnaire_answers');
    this.storage.remove('id');
    this.storage.remove('riskScore');
  }

  signup(user: UserOptions) {
    this.storage.set('user', user);
    let response = this.userData.saveUser(user);

    // TODO: Save Token
  }
}
