import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserOptions } from '../interfaces/user-options';


@Injectable({
  providedIn: 'root'
})
export class UserData {
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    public storage: Storage
  ) { }

  retrieve(): Promise<UserOptions> {
    return new Promise<UserOptions>((resolve, reject) => {
      resolve(this.storage.get('user'));
    });
  }

  signup(user: UserOptions) {
    this.storage.set('user', user);
  }
}
