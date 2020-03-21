import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-riskgroup',
  templateUrl: './riskgroup.component.html',
  styleUrls: ['./riskgroup.component.scss'],
})
export class RiskgroupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  submit() {
    this.router.navigateByUrl('/signup');
  }
}
