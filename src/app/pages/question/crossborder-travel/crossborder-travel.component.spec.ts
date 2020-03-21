import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrossborderTravelComponent } from './crossborder-travel.component';

describe('CrossborderTravelComponent', () => {
  let component: CrossborderTravelComponent;
  let fixture: ComponentFixture<CrossborderTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossborderTravelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrossborderTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
