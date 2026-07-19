import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-candidate',
  imports: [FormRoot, MatFormField, MatLabel, FormField, MatButton, MatInput, RouterLink],
  templateUrl: './add-candidate.html',
  styleUrl: './add-candidate.scss',
})
export class AddCandidate {
  model = signal({
    name: '',
    position: '',
    phone: '',
    email: '',
    skills: '',
  });

  userForm = form(this.model);

  submit() {
    console.log(this.model());
  }
}
