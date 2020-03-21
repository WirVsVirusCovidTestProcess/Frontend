import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiarrheaComponent } from './diarrhea.component';

describe('DiarrheaComponent', () => {
  let component: DiarrheaComponent;
  let fixture: ComponentFixture<DiarrheaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarrheaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiarrheaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
