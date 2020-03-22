import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CortisolComponent } from './cortisol.component';

describe('CortisolComponent', () => {
  let component: CortisolComponent;
  let fixture: ComponentFixture<CortisolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CortisolComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CortisolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
