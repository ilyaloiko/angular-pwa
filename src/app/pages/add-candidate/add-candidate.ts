import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, FormRoot, required } from '@angular/forms/signals';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Candidate } from '../../core/models/candidate.model';
import { CandidateLocalRepository } from '../../core/repositories/candidate-local-repository';
import { MatOptgroup, MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './add-candidate.html',
  styleUrl: './add-candidate.scss',
})
export class AddCandidate {
  private readonly candidateLocalRepository = inject(CandidateLocalRepository);
  private router = inject(Router);

  model = signal<Candidate>({
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

  isSaveAvailable(): boolean {
    return this.candidateForm().valid();
  }

  submit(): void {
    this.candidateLocalRepository.create(this.model()).then(() => {
      this.router.navigateByUrl('/candidates');
    });
  }
}
