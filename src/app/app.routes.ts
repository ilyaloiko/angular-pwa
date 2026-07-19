import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Layout } from './layout/layout';
import { Candidates } from './pages/candidates/candidates';
import { AddCandidate } from './pages/add-candidate/add-candidate';

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
        component: Candidates,
      },
      {
        path: 'add-candidate',
        component: AddCandidate,
      },
    ],
  },
];
