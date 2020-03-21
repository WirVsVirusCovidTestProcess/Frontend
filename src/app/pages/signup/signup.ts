import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: UserOptions = { Code: '', Name: '', Street: '', Area: '', Email: '', Phone: '' };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData
  ) {
    this.signup.Code = this.router.getCurrentNavigation().extras.state.code;
  }

  onSignup(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.userData.signup(this.signup);
      this.router.navigateByUrl('/account');
    }
  }
}
