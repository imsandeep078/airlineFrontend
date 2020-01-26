import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupanyDetailsComponent } from './occupany-details.component';

describe('OccupanyDetailsComponent', () => {
  let component: OccupanyDetailsComponent;
  let fixture: ComponentFixture<OccupanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupanyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
