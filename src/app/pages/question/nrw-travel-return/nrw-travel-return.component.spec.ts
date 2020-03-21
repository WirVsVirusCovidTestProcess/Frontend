import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NrwTravelReturnComponent } from './nrw-travel-return.component';

describe('NrwTravelReturnComponent', () => {
  let component: NrwTravelReturnComponent;
  let fixture: ComponentFixture<NrwTravelReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrwTravelReturnComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NrwTravelReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
