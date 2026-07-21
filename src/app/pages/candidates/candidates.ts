import { Component, inject, OnInit, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CandidateLocalRepository } from '../../core/repositories/candidate-local-repository';
import { Candidate } from '../../core/models/candidate.model';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-candidates',
  imports: [
    MatTableModule,
    MatIcon,
    RouterLink,
    MatButton,
    MatIconButton,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './candidates.html',
  styleUrl: './candidates.scss',
})
export class Candidates implements OnInit {
  private readonly candidateService = inject(CandidateLocalRepository);

  displayedColumns: string[] = [
    'name',
    'position',
    'level',
    'email',
    'skills',
    'favorite',
    'actions',
  ];
  dataSource = signal<Candidate[]>([]);

  ngOnInit(): void {
    this.candidateService.getAll().then((data) => {
      this.dataSource.set(data);
    });
  }

  delete(candidate: Candidate): void {
    if (candidate.id) {
      this.candidateService.delete(candidate.id);
    }
  }
}
