import { Routes } from '@angular/router';
import { Dashboard } from './feature/dashboard/pages/dashboard/dashboard';
import { Layout } from './core/components/layout/layout';
import { Candidates } from './feature/candidates/pages/candidates/candidates';
import { CreateCandidate } from './feature/candidates/pages/create-candidate/create-candidate';
import { ViewCandidate } from './feature/candidates/pages/view-candidate/view-candidate';
import { EditCandidate } from './feature/candidates/pages/edit-candidate/edit-candidate';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'candidates',
        children: [
          {
            path: '',
            component: Candidates,
          },
          {
            path: 'new',
            component: CreateCandidate,
          },
          {
            path: ':id/view',
            component: ViewCandidate,
          },
          {
            path: ':id/edit',
            component: EditCandidate,
          },
        ],
      },
    ],
  },
];
