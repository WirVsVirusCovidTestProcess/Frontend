import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImmunSuppressivaComponent } from './immun-suppressiva.component';

describe('ImmunSuppressivaComponent', () => {
  let component: ImmunSuppressivaComponent;
  let fixture: ComponentFixture<ImmunSuppressivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmunSuppressivaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImmunSuppressivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
