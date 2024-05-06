import { Routes } from '@angular/router';
import { authGuard } from './guardRouter/auth.guard';
import { noAuthGuard } from './guardRouter/no-auth.guard';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.page').then( m => m.AuthPage),
    canActivate: [authGuard]
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    canActivate: [noAuthGuard]
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  }

];
