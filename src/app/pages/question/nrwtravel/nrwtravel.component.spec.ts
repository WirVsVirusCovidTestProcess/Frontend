import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NrwtravelComponent } from './nrwtravel.component';

describe('NrwtravelComponent', () => {
  let component: NrwtravelComponent;
  let fixture: ComponentFixture<NrwtravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrwtravelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NrwtravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
