import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoughComponent } from './cough.component';

describe('CoughComponent', () => {
  let component: CoughComponent;
  let fixture: ComponentFixture<CoughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoughComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
