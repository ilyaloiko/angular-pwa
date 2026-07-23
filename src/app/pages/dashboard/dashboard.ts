import { Component, OnInit, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CandidateLocalRepository } from '../../core/repositories/candidate-local-repository';

@Component({
  selector: 'app-dashboard',
  imports: [MatGridListModule, MatCardModule, MatTableModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  total = signal(0);
  favorite = signal(0);
  frontend = signal(0);
  backend = signal(0);
  fullstack = signal(0);

  constructor(private readonly candidateLocalRepository: CandidateLocalRepository) {}

  ngOnInit(): void {
    this.candidateLocalRepository.getList().then((candidates) => {
      this.total.set(candidates.length);
      this.favorite.set(candidates.filter((item) => item.favorite).length);
      this.frontend.set(candidates.filter((item) => item.position === 'Frontend').length);
      this.backend.set(candidates.filter((item) => item.position === 'Backend').length);
      this.fullstack.set(candidates.filter((item) => item.position === 'Full-Stack').length);
    });
  }
}
