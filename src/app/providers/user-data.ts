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

/*   login(username: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:login'));
    });
  }*/

  signup(user: UserOptions) {
/*     this.storage.set('profile', user.Name);
    this.storage.set('profile', user.Street);
    this.storage.set('profile', user.Area);
    this.storage.set('profile', user.Email);
    this.storage.set('profile', user.Phone); */
  }

/*   logout(): Promise<any> {
    return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
      return this.storage.remove('username');
    }).then(() => {
      window.dispatchEvent(new CustomEvent('user:logout'));
    });
  }  */
}
