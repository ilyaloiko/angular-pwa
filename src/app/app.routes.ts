import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/pages/dashboard/dashboard';
import { Layout } from './layout/layout';
import { Candidates } from './pages/candidates/candidates';
import { CreateCandidate } from './pages/create-candidate/create-candidate';
import { ViewCandidate } from './pages/view-candidate/view-candidate';
import { EditCandidate } from './pages/edit-candidate/edit-candidate';

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
