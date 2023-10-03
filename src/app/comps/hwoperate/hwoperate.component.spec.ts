import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwoperateComponent } from './hwoperate.component';

describe('HwoperateComponent', () => {
  let component: HwoperateComponent;
  let fixture: ComponentFixture<HwoperateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HwoperateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HwoperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
