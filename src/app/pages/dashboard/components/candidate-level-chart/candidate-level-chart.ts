import { Component, effect, input } from '@angular/core';
import { Candidate } from '../../../../core/models/candidate.model';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-candidate-level-chart',
  imports: [BaseChartDirective, MatCardContent, MatCard],
  templateUrl: './candidate-level-chart.html',
  styleUrl: './candidate-level-chart.scss',
})
export class CandidateLevelChart {
  readonly candidates = input.required<Candidate[]>();

  data: ChartData<'bar'> = {
    labels: [],
    datasets: [],
  };

  readonly options: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Levels',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  constructor() {
    effect(() => {
      const counts = new Map<string, number>();

      for (const candidate of this.candidates()) {
        counts.set(candidate.level, (counts.get(candidate.level) ?? 0) + 1);
      }

      this.data = {
        labels: [...counts.keys()],
        datasets: [
          {
            label: 'Candidates',
            data: [...counts.values()],
            backgroundColor: [
              'rgba(153, 102, 255, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgb(153, 102, 255)',
              'rgb(54, 162, 235)',
              'rgb(75, 192, 192)',
              'rgb(255, 159, 64)',
              'rgb(255, 99, 132)',
            ],
            borderWidth: 1,
          },
        ],
      };
    });
  }
}
