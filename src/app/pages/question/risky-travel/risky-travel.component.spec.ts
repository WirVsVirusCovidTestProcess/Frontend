import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiskyTravelComponent } from './risky-travel.component';

describe('RiskyTravelComponent', () => {
  let component: RiskyTravelComponent;
  let fixture: ComponentFixture<RiskyTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskyTravelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiskyTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
