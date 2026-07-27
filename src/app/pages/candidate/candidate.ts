import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/list';
import { CandidateLocalRepository } from '../../core/repositories/candidate-local-repository';
import { ActivatedRoute } from '@angular/router';
import { Candidate as CandidateDto } from '../../core/models/candidate.model';

@Component({
  selector: 'app-candidate',
  imports: [MatCard, MatCardContent, MatDivider],
  templateUrl: './candidate.html',
  styleUrl: './candidate.scss',
})
export class Candidate implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly candidateLocalRepository = inject(CandidateLocalRepository);

  readonly candidate = signal<CandidateDto | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.candidateLocalRepository.get(+id).then((candidate) => {
      this.candidate.set(candidate ?? null);
    });
  }
}
