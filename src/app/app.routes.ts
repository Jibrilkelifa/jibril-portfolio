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
  },
{
  path: 'projects',
  loadComponent: () =>
    import('./modules/projects/projects/projects').then(
      m => m.ProjectsComponent
    )
},
{
  path: 'projects/cyberai',
  loadComponent: () =>
    import('./modules/projects/cyberai/cyberai')
      .then(m => m.Cyberai)
},
{
  path: 'cyberai',
  loadComponent: () =>
    import('./modules/cyberai/cyberai/cyberai').then(
      m => m.Cyberai
    )
},
{
  path: 'security-labs',
  loadComponent: () =>
    import('./modules/security-labs/security-labs/security-labs').then(
      m => m.SecurityLabs
    )
},
{
  path: 'timeline',
  loadComponent: () =>
    import('./modules/timeline/timeline/timeline').then(m => m.TimelineComponent)
},
{
  path: 'certifications',
  loadComponent: () =>
    import('./modules/certifications/certifications/certifications').then(
      m => m.CertificationsComponent
    )
}





];
