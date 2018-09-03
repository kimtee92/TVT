import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from './shared/_guards/auth.guard'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'pages/profile',
    canActivate: [AuthGuard]
  }
];

export const routing = RouterModule.forRoot(appRoutes);
