import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FluShotComponent } from './flu-shot.component';

describe('FluShotComponent', () => {
  let component: FluShotComponent;
  let fixture: ComponentFixture<FluShotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluShotComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FluShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
