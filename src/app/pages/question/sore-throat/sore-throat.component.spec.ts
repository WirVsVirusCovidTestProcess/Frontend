import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoreThroatComponent } from './sore-throat.component';

describe('SoreThroatComponent', () => {
  let component: SoreThroatComponent;
  let fixture: ComponentFixture<SoreThroatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoreThroatComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoreThroatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
