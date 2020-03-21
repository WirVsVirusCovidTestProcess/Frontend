import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuspectContactComponent } from './suspect-contact.component';

describe('SuspectContactComponent', () => {
  let component: SuspectContactComponent;
  let fixture: ComponentFixture<SuspectContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectContactComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuspectContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
