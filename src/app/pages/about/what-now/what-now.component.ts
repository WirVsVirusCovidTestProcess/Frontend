import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-now',
  templateUrl: './what-now.component.html',
  styleUrls: ['./what-now.component.scss'],
})
export class WhatNowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  decide() {
    this.router.navigateByUrl('/about/better-check-up');
  }
}
