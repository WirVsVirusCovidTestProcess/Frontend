import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeverComponent } from './fever.component';

describe('FeverComponent', () => {
  let component: FeverComponent;
  let fixture: ComponentFixture<FeverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
