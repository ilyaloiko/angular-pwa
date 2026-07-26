import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateLevelChart } from './candidate-level-chart';

describe('CandidateLevelChart', () => {
  let component: CandidateLevelChart;
  let fixture: ComponentFixture<CandidateLevelChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateLevelChart],
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateLevelChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
