import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCandidateCarousel } from './favorite-candidate-carousel';

describe('FavoriteCandidateCarousel', () => {
  let component: FavoriteCandidateCarousel;
  let fixture: ComponentFixture<FavoriteCandidateCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteCandidateCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteCandidateCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
