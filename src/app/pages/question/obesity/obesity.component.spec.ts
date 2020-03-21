import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObesityComponent } from './obesity.component';

describe('ObesityComponent', () => {
  let component: ObesityComponent;
  let fixture: ComponentFixture<ObesityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObesityComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObesityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
