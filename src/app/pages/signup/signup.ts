import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserDataService } from '../../services/userData.service';

import { UserOptions } from '../../types/user-options';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage implements OnInit {
  signup: UserOptions = { code: '', name: '', street: '', area: '', email: '', phone: '' };
  submitted = false;

  contacts: Array<string> = ['', ''];

  constructor(
    public router: Router,
    public userData: UserDataService) { }

  ngOnInit(): void {}

  onSignup(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.userData.signup(this.signup);
      this.userData.saveContactPersons(this.contacts);
      this.router.navigateByUrl('/account');
    }
  }

  addContact() {
    if (this.contacts.length < 5) {
      this.contacts.push('');
    }
  }
}
