import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../shared/_guards/auth.guard'

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
            { path: 'violations', loadChildren: './violations/violations.module#ViolationsModule' },
            { path: 'payment', loadChildren: './payment/profile.module#ProfileModule' },
            { path: 'scandriver', loadChildren: './scandriver/scandriver.module#ScanDriverModule' },
            { path: 'issueticket', loadChildren: './issueticket/profile.module#ProfileModule' },
        ],
        canActivate: [AuthGuard]
    }
];

export const routing = RouterModule.forChild(childRoutes);
