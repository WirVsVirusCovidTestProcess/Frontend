import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  start(){
    this.router.navigateByUrl('/questions/factors-age', { replaceUrl: true });
  }

}
