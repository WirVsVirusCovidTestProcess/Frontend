import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChillsComponent } from './chills.component';

describe('ChillsComponent', () => {
  let component: ChillsComponent;
  let fixture: ComponentFixture<ChillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChillsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
