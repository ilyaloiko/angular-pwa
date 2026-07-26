import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCarousel } from './favorite-carousel';

describe('FavoriteCarousel', () => {
  let component: FavoriteCarousel;
  let fixture: ComponentFixture<FavoriteCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
