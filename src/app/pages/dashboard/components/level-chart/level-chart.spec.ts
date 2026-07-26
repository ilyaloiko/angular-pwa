import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelChart } from './level-chart';

describe('LevelChart', () => {
  let component: LevelChart;
  let fixture: ComponentFixture<LevelChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelChart],
    }).compileComponents();

    fixture = TestBed.createComponent(LevelChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
