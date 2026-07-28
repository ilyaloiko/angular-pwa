import { Component, effect, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CandidateLocalRepository } from '../../core/repositories/candidate-local-repository';
import { Candidate as CandidateDto } from '../../core/models/candidate.model';
import { email, form, FormField, FormRoot, required } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatOptgroup, MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-edit-candidate',
  imports: [
    FormRoot,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
    MatOptgroup,
    MatOption,
    MatSelect,
    MatSlideToggle,
    RouterLink,
    FormField,
  ],
  templateUrl: './edit-candidate.html',
  styleUrl: './edit-candidate.scss',
})
export class EditCandidate {
  id = input.required<string>();

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly candidateLocalRepository = inject(CandidateLocalRepository);

  readonly model = signal<CandidateDto>({
    firstName: '',
    lastName: '',
    position: '',
    level: '',
    email: '',
    skills: [],
    favorite: false,
  });

  candidateForm = form(this.model, (path) => {
    required(path.firstName);
    required(path.lastName);
    required(path.position);
    required(path.level);
    required(path.email);
    required(path.skills);

    email(path.email);
  });

  constructor() {
    effect(() => {
      this.candidateLocalRepository.get(+this.id()).then((candidate) => {
        if (candidate) {
          this.model.set(candidate);
        }
      });
    });
  }

  isSaveAvailable(): boolean {
    return this.candidateForm().valid();
  }

  async submit(): Promise<void> {
    await this.candidateLocalRepository.update(this.model().id ?? 0, this.model());
    await this.router.navigate(['/candidates', this.model().id, 'view']);
  }
}
