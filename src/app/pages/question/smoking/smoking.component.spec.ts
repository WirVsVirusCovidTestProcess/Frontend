import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmokingComponent } from './smoking.component';

describe('SmokingComponent', () => {
  let component: SmokingComponent;
  let fixture: ComponentFixture<SmokingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmokingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmokingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
