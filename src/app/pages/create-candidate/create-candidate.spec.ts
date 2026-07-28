import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCandidate } from './create-candidate';

describe('CreateCandidate', () => {
  let component: CreateCandidate;
  let fixture: ComponentFixture<CreateCandidate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCandidate],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCandidate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
