import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss'],
})
export class AgeComponent implements OnInit {

  age: 0;

  constructor(private router: Router) { }

  ngOnInit() {}

  submit() {
    console.log(this.age);
    this.router.navigateByUrl('/questions/factor-work', { replaceUrl: true });
  }

}
