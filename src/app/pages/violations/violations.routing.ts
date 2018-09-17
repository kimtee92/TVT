import { Routes, RouterModule } from '@angular/router';
import { ViolationsComponent } from './violations.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ViolationsComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
