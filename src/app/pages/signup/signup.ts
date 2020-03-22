import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { QuestionnaireDataService } from '../../services/questionnaireData.service';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage implements OnInit {
  signup: UserOptions = { Code: '', Name: '', Street: '', Area: '', Email: '', Phone: '' };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData,
    private questionSvc: QuestionnaireDataService  ) { }

  ngOnInit(): void {
    //this.signup.Code = this.questionSvc.getId();
  }

  onSignup(form: NgForm) {
    this.submitted = true;
    console.log(this.signup);
    if (form.valid) {
      this.userData.signup(this.signup);
      this.router.navigateByUrl('/account');
    }
  }
}
