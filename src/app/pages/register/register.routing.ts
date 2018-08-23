import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

const childRoutes: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
