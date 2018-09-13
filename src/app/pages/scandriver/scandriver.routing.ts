import { Routes, RouterModule } from '@angular/router';
import { ScanDriverComponent } from './scandriver.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ScanDriverComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
