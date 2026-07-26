import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePositionChart } from './candidate-position-chart';

describe('CandidatePositionChart', () => {
  let component: CandidatePositionChart;
  let fixture: ComponentFixture<CandidatePositionChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatePositionChart],
    }).compileComponents();

    fixture = TestBed.createComponent(CandidatePositionChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
