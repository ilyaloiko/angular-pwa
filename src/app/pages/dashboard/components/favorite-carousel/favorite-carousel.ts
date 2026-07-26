import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { Candidate } from '../../../../core/models/candidate.model';
import { CandidateCard } from '../candidate-card/candidate-card';

@Component({
  selector: 'app-favorite-carousel',
  imports: [CandidateCard],
  templateUrl: './favorite-carousel.html',
  styleUrl: './favorite-carousel.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FavoriteCarousel {
  readonly candidates = input.required<Candidate[]>();
}
