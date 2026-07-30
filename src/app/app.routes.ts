import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/components/layout/layout').then((c) => c.Layout),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./feature/dashboard/pages/dashboard/dashboard').then((c) => c.Dashboard),
      },
      {
        path: 'candidates',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./feature/candidates/pages/candidates/candidates').then((c) => c.Candidates),
          },
          {
            path: 'new',
            loadComponent: () =>
              import('./feature/candidates/pages/create-candidate/create-candidate').then(
                (c) => c.CreateCandidate,
              ),
          },
          {
            path: ':id/view',
            loadComponent: () =>
              import('./feature/candidates/pages/view-candidate/view-candidate').then(
                (c) => c.ViewCandidate,
              ),
          },
          {
            path: ':id/edit',
            loadComponent: () =>
              import('./feature/candidates/pages/edit-candidate/edit-candidate').then(
                (c) => c.EditCandidate,
              ),
          },
        ],
      },
    ],
  },
];
