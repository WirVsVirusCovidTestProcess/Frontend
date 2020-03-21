import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListlessComponent } from './listless.component';

describe('ListlessComponent', () => {
  let component: ListlessComponent;
  let fixture: ComponentFixture<ListlessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlessComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
