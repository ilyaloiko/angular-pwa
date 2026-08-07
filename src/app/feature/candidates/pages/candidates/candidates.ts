import { Component, effect, inject, resource, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Candidate } from '../../../../core/models/candidate.model';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TruncateArrayPipe } from '../../../../shared/pipes/truncate-array/truncate-array-pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { CandidateRepository } from '../../../../core/repositories/candidate-repository';

export interface CandidateFilter {
  search: string;
  position: string;
  level: string;
}

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
    MatTooltipModule,
    TruncateArrayPipe,
    MatFormFieldModule,
    MatInputModule,
    FormRoot,
    FormField,
    MatOption,
    MatSelect,
  ],
  templateUrl: './candidates.html',
  styleUrl: './candidates.scss',
})
export class Candidates {
  private readonly candidateRepository = inject(CandidateRepository);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  readonly displayedColumns: string[] = [
    'name',
    'position',
    'level',
    'email',
    'skills',
    'favorite',
    'actions',
  ];

  readonly filter = signal<CandidateFilter>(this.getFilterFromQueryParams());
  readonly filterForm = form(this.filter);

  readonly candidates = resource<Candidate[], CandidateFilter>({
    params: () => this.filter(),
    loader: () => {
      return this.candidateRepository.getList();
    },
  });

  constructor() {
    effect(() => {
      console.log('effect');

      const { search, position, level } = this.filter();

      this.addQueryParams({
        search: search || null,
        position: position || null,
        level: level || null,
      });
    });
  }

  view(candidate: Candidate): void {
    this.router.navigate(['/candidates', candidate.id, 'view']);
  }

  delete(candidate: Candidate): void {
    if (candidate.id) {
      this.candidateRepository.delete(candidate.id).then(() => this.candidates.reload());
    }
  }

  reset(): void {
    this.filter.set({
      search: '',
      position: '',
      level: '',
    });
  }

  private getFilterFromQueryParams(): CandidateFilter {
    const { search = '', position = '', level = '' } = this.activatedRoute.snapshot.queryParams;

    return {
      search,
      position,
      level,
    };
  }

  private addQueryParams(queryParams: Params): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
