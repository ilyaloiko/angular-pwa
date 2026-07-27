import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/pages/dashboard/dashboard';
import { Layout } from './layout/layout';
import { Candidates } from './pages/candidates/candidates';
import { AddCandidate } from './pages/add-candidate/add-candidate';
import { Candidate } from './pages/candidate/candidate';

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
            component: AddCandidate,
          },
          {
            path: ':id',
            component: Candidate,
          },
        ],
      },
    ],
  },
];
