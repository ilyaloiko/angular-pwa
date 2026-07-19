import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

export interface Candidate {
  name: string;
  position: string;
  status: string;
}

const ELEMENT_DATA: Candidate[] = [
  { name: 'Ilya', position: 'Frontend', status: 'Interview' },
  { name: 'Oleg', position: 'Backend', status: 'Applied' },
  { name: 'Alex', position: 'Backend', status: 'Offer' },
  { name: 'Danila', position: 'Backend', status: 'Applied' },
  { name: 'Olga', position: 'Full-Stack', status: 'Applied' },

  { name: 'Ilya', position: 'Frontend', status: 'Offer' },
  { name: 'Misha', position: 'Full-Stack', status: 'Interview' },
  { name: 'Katya', position: 'Frontend', status: 'Applied' },
  { name: 'Ilya', position: 'Frontend', status: 'Offer' },
  { name: 'Sasha', position: 'Full-Stack', status: 'Interview' },
];

@Component({
  selector: 'app-candidates',
  imports: [
    MatTableModule,
    MatIcon,
    MatMiniFabButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    RouterLink,
    MatButton,
  ],
  templateUrl: './candidates.html',
  styleUrl: './candidates.scss',
})
export class Candidates {
  displayedColumns: string[] = ['name', 'position', 'status'];
  dataSource = ELEMENT_DATA;

  add(): void {
    alert('Add');
  }

  import(): void {
    // TODO: implement
  }

  export(): void {
    // TODO: implement
  }
}
