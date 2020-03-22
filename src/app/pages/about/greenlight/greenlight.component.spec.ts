import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GreenlightComponent } from './greenlight.component';

describe('GreenlightComponent', () => {
  let component: GreenlightComponent;
  let fixture: ComponentFixture<GreenlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenlightComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GreenlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
