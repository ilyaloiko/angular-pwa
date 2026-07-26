import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionChart } from './position-chart';

describe('PositionChart', () => {
  let component: PositionChart;
  let fixture: ComponentFixture<PositionChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionChart],
    }).compileComponents();

    fixture = TestBed.createComponent(PositionChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
