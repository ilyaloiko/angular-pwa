import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Candidate } from '../../../../core/models/candidate.model';
import { TruncateArrayPipe } from '../../../../shared/pipes/truncate-array/truncate-array-pipe';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-favorite-candidate-carousel',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatCardTitleGroup,
    MatIcon,
    TruncateArrayPipe,
    MatTooltip,
  ],
  templateUrl: './favorite-candidate-carousel.html',
  styleUrl: './favorite-candidate-carousel.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FavoriteCandidateCarousel {
  readonly candidates = input.required<Candidate[]>();
}
