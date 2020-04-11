import { AfterViewInit, Component, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { QuestionnaireDataService } from '../../services/questionnaireData.service';
import { UserOptions } from '../../interfaces/user-options';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit, AfterContentInit {
  public user: UserOptions = { Code: '', Name: '', Street: '', Area: '', Email: '', Phone: '' };
  questionnaireDataXML = 'NO DATA';
  contacts: Array<string> = [''];

  result = null;
  appointment = null;

  constructor(
    public router: Router,
    public userData: UserData,
    private questionnaireDataService: QuestionnaireDataService
  ) { }


  ngAfterContentInit(): void {
    this.delay(3000).then(() => {
      this.appointment = {
        time: '24.03.2020 17:30 Uhr',
        street: 'Marienhospital Stuttgart',
        area: '70189 Stuttgart'
      };
    }).then(next =>
      this.delay(5000).then(() => {
        this.result = true;
      })
    );
  }

  getstatus(result) {
    if (result == null) {
      return 'light';
    } else if (result) {
      return 'danger';
    } else {
      return 'success';
    }
  }

  ngAfterViewInit() {
    this.userData.contactCache().then(res => {
        // mock contacts
        this.contacts = ['Max Mustermann', 'Michael Müller'];
    });

    this.userData.retrieve().then(result => {
      // mock result
/*       result = {
        Name: 'Max Mustermann',
        Street: 'Hauptstraße 1',
        Code: 'Ps5ClfN10hHw1K38zzTo1zf6Y+KLXL',
        Area: '12345 Berlin',
        Email: 'test@example.com',
        Phone: '+49 123456789'
      }; */
      this.user = result;
    });

    this.questionnaireDataXML = this.questionnaireDataService.toXML();
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
  }

  addContact() {

    this.userData.clearCaches();
    if (this.contacts.length < 5) {
      this.contacts.push('');
    }
  }

  showQRCode() {
    this.router.navigateByUrl('/qr-code');
  }
}
