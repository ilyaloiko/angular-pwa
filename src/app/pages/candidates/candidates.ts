import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CandidateLocalRepository } from '../../core/repositories/candidate-local-repository';
import { Candidate } from '../../core/models/candidate.model';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TruncateArrayPipe } from '../../shared/pipes/truncate-array/truncate-array-pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, merge, of, skip, Subject, switchMap } from 'rxjs';

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
  ],
  templateUrl: './candidates.html',
  styleUrl: './candidates.scss',
})
export class Candidates implements OnInit {
  private readonly candidateLocalRepository = inject(CandidateLocalRepository);
  private readonly destroyRef = inject(DestroyRef);

  readonly candidates = signal<Candidate[]>([]);
  readonly searchValue = signal<string>('');

  private readonly searchValue$ = toObservable(this.searchValue).pipe(
    skip(1),
    debounceTime(400),
    distinctUntilChanged(),
  );
  private readonly refresh$ = new Subject<void>();

  displayedColumns: string[] = [
    'name',
    'position',
    'level',
    'email',
    'skills',
    'favorite',
    'actions',
  ];

  ngOnInit(): void {
    merge(of(''), this.searchValue$, this.refresh$)
      .pipe(
        switchMap(() => this.candidateLocalRepository.getList(this.searchValue())),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((candidates) => {
        this.candidates.set(candidates);
      });
  }

  search(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchValue.set(value);
  }

  delete(candidate: Candidate): void {
    if (candidate.id) {
      this.candidateLocalRepository.delete(candidate.id).then(() => this.refresh$.next());
    }
  }
}
