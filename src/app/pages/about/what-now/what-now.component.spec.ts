import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatNowComponent } from './what-now.component';

describe('WhatNowComponent', () => {
  let component: WhatNowComponent;
  let fixture: ComponentFixture<WhatNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatNowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
