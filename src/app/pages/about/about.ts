import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {

  constructor(private router: Router) { }


  start() {
    this.router.navigateByUrl('/about/details', { replaceUrl: true });
  }
}
