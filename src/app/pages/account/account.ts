import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserDataService } from '../../services/userData.service';
import { QuestionnaireDataService } from '../../services/questionnaireData.service';
import { UserOptions } from '../../types/user-options';
import { merge, Observable, of } from 'rxjs';
import { filter, timeoutWith, delay, map } from 'rxjs/operators';

interface Appointment {
  time: string;
  street: string;
  area: string;
}

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit {
  user: Observable<UserOptions>;
  questionnaireDataXML: Observable<string> = of('NO DATA');
  contacts: Observable<Array<string>>;

  result: Observable<{ value: string, color: string}>;
  appointment: Observable<Appointment>;

  constructor(
    public router: Router,
    public userData: UserDataService,
    private questionnaireDataService: QuestionnaireDataService
  ) {
  }

  getstatus(result) {
    if (result === 'positive') {
      return 'danger';
    } else if (result === 'negative') {
      return 'success';
    } else {
      return 'light';
    }
  }

  ngAfterViewInit() {
    this.contacts = this.userData.getContactPersons().pipe(
      filter(x => !!x),
      timeoutWith(1000, of(['Michaela Mustermann', 'Michael Müller']))
    );

    this.user = this.userData.getUserData().pipe(
      filter(x => !!x)
    );

    this.appointment = of({
      time: '24.03.2020 17:30 Uhr',
      street: 'Marienhospital Stuttgart',
      area: '70189 Stuttgart'
    }).pipe(delay(3000));

    this.result = merge(of('pending'), of('positive').pipe(delay(6000))).pipe(map(val => ({
      value: val,
      color: this.getstatus(val)
    })));

    this.questionnaireDataXML = this.questionnaireDataService.toXML();
  }

  addContact() {
    this.userData.clearData();
  }

  showQRCode() {
    this.router.navigateByUrl('/qr-code');
  }
}
