import { Component, inject, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { TruncateArrayPipe } from '../../../../shared/pipes/truncate-array/truncate-array-pipe';
import { Candidate } from '../../../../core/models/candidate.model';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-card',
  imports: [MatCard, MatCardContent, MatIcon, TruncateArrayPipe, MatTooltip],
  templateUrl: './candidate-card.html',
  styleUrl: './candidate-card.scss',
})
export class CandidateCard {
  readonly candidate = input.required<Candidate>();

  private readonly router = inject(Router);

  view(): void {
    this.router.navigate(['/candidates', this.candidate().id, 'view']);
  }
}
