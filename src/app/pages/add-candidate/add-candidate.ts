import { Component, inject, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Candidate } from '../../core/models/candidate.model';
import { CandidateLocalRepository } from '../../core/repositories/candidate-local-repository';
import { MatOptgroup, MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-add-candidate',
  imports: [
    FormRoot,
    MatFormField,
    MatLabel,
    FormField,
    MatButton,
    MatInput,
    RouterLink,
    MatOption,
    MatSelect,
    MatOptgroup,
    MatSlideToggle,
    MatCard,
    MatCardContent,
    MatCardActions,
  ],
  templateUrl: './add-candidate.html',
  styleUrl: './add-candidate.scss',
})
export class AddCandidate {
  private readonly candidateLocalRepository = inject(CandidateLocalRepository);

  model = signal<Candidate>({
    name: '',
    position: '',
    level: '',
    email: '',
    skills: '',
    favorite: false,
  });

  userForm = form(this.model);

  submit(): void {
    const candidate = this.model();
    this.candidateLocalRepository .create(candidate);
  }
}
