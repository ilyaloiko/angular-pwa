import { Component, effect, inject, input, signal } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/list';
import { Router } from '@angular/router';
import { Candidate as CandidateDto } from '../../../../core/models/candidate.model';
import { MatButton } from '@angular/material/button';
import { CandidateRepository } from '../../../../core/repositories/candidate-repository';

@Component({
  selector: 'app-candidate',
  imports: [MatCard, MatCardContent, MatDivider, MatCardActions, MatButton],
  templateUrl: './view-candidate.html',
  styleUrl: './view-candidate.scss',
})
export class ViewCandidate {
  id = input.required<string>();

  private readonly router = inject(Router);
  private readonly candidateRepository = inject(CandidateRepository);

  readonly candidate = signal<CandidateDto | null>(null);

  constructor() {
    effect(() => {
      this.candidateRepository.getOne(this.id()).then((candidate) => {
        this.candidate.set(candidate ?? null);
      });
    });
  }

  edit(): void {
    this.router.navigate(['/candidates', this.candidate()?.id, 'edit']);
  }
}
