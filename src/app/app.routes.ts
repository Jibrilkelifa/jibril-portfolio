import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/home/home/home')
        .then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./modules/about/about')
        .then(m => m.About)
  }
];
