import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../services/user-data';

import { UserOptions } from '../../types/user-options';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage implements OnInit {
  signup: UserOptions = { Code: '', Name: '', Street: '', Area: '', Email: '', Phone: '' };
  submitted = false;

  contacts: Array<string> = ['', ''];

  constructor(
    public router: Router,
    public userData: UserData) { }

  ngOnInit(): void {}

  onSignup(form: NgForm) {
    this.submitted = true;
    console.log(this.contacts);
    if (form.valid) {
      this.userData.signup(this.signup);
      this.userData.cacheContacts(this.contacts);
      this.router.navigateByUrl('/account');
    }
  }

  addContact() {
    if (this.contacts.length < 5) {
      this.contacts.push('');
    }
  }
}
