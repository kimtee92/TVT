import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'violations', loadChildren: './violations/profile.module#ProfileModule' },
            { path: 'payment', loadChildren: './payment/profile.module#ProfileModule' },
            { path: 'scandriver2', loadChildren: './scandriver2/profile.module#ProfileModule' },
            { path: 'issueticket', loadChildren: './issueticket/profile.module#ProfileModule' },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
