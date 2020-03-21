import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { UserData } from '../../providers/user-data';
import { QuestionnaireDataService } from '../../services/questionnaireData.service';
import { UserOptions } from '../../interfaces/user-options';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit {
  user: UserOptions;
  questionnaireDataXML: string = 'this is corona sample';

  constructor(
    public router: Router,
    public userData: UserData,
    public storage: Storage,
    private questionnaireDataService: QuestionnaireDataService
  ) { }

  ngAfterViewInit() {
    //this.user = this.storage.getItem('profile');
    this.questionnaireDataXML = this.questionnaireDataService.toXML();
    //this.getUsername();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  /* async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.userData.setUsername(data.username);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  } */

  g/* etUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }

  support() {
    this.router.navigateByUrl('/support');
  } */
}
