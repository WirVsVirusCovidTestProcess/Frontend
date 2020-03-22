import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SniffComponent } from './sniff.component';

describe('SniffComponent', () => {
  let component: SniffComponent;
  let fixture: ComponentFixture<SniffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SniffComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SniffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
