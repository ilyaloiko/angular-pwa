import { Component, inject, OnInit, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CandidateLocalRepository } from '../../../../core/repositories/candidate-local-repository';
import { Candidate } from '../../../../core/models/candidate.model';
import { FavoriteCarousel } from '../../components/favorite-carousel/favorite-carousel';
import { PositionChart } from '../../components/position-chart/position-chart';
import { KpiCard } from '../../components/kpi-card/kpi-card';
import { LevelChart } from '../../components/level-chart/level-chart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    FavoriteCarousel,
    PositionChart,
    KpiCard,
    LevelChart,
    RouterLink,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  private readonly candidateLocalRepository = inject(CandidateLocalRepository);

  readonly candidates = signal<Candidate[]>([]);
  readonly favoriteCandidates = signal<Candidate[]>([]);
  readonly total = signal(0);
  readonly favorite = signal(0);
  readonly frontend = signal(0);
  readonly backend = signal(0);
  readonly fullstack = signal(0);

  ngOnInit(): void {
    this.candidateLocalRepository.getList().then((candidates) => {
      this.candidates.set(candidates);
      this.favoriteCandidates.set(candidates.filter((item) => item.favorite));

      this.total.set(candidates.length);
      this.favorite.set(candidates.filter((item) => item.favorite).length);
      this.frontend.set(candidates.filter((item) => item.position === 'Frontend').length);
      this.backend.set(candidates.filter((item) => item.position === 'Backend').length);
      this.fullstack.set(candidates.filter((item) => item.position === 'FullStack').length);
    });
  }
}
