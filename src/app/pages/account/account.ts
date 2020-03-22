import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { QuestionnaireDataService } from '../../services/questionnaireData.service';
import { UserOptions } from '../../interfaces/user-options';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit {
  public user: UserOptions = { Code: '', Name: '', Street: '', Area: '', Email: '', Phone: '' };
  questionnaireDataXML = 'this is corona sample';

  constructor(
    public router: Router,
    public userData: UserData,
    private questionnaireDataService: QuestionnaireDataService
  ) { }

  ngAfterViewInit() {
    this.userData.retrieve().then(result => {
      // mock result
      result = {
        Name: 'Max Mustermann',
        Street: 'Hauptstraße 1',
        Code: 'Ps5ClfN10hHw1K38zzTo1zf6Y+KLXL',
        Area: '12345 Berlin',
        Email: 'test@example.com',
        Phone: '+49 123456789'
      };
      this.user = result;
    });

    this.questionnaireDataXML = this.questionnaireDataService.toXML();
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

  /* getUsername() {
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
