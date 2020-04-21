import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiskgroupComponent } from './riskgroup.component';

describe('RiskgroupComponent', () => {
  let component: RiskgroupComponent;
  let fixture: ComponentFixture<RiskgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskgroupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiskgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
