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
import { NotificationService } from '../../core/services/notification-service';

@Component({
  selector: 'app-create-candidate',
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
  templateUrl: './create-candidate.html',
  styleUrl: './create-candidate.scss',
})
export class CreateCandidate {
  private readonly candidateLocalRepository = inject(CandidateLocalRepository);
  private readonly notificationService = inject(NotificationService);
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

  async submit(): Promise<void> {
    await this.candidateLocalRepository.create(this.model());

    /*await this.notificationService.show(
      'Candidate added',
      `Candidate was added successfully`,
    );

    await this.notificationService.setBadge();*/

    await this.router.navigateByUrl('/candidates');
  }
}
