import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-kpi-card',
  imports: [MatCard, MatCardContent],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.scss',
})
export class KpiCard {
  readonly title = input.required<string>();
  readonly value = input.required<number>();
}
