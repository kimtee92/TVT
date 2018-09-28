import { Routes, RouterModule } from '@angular/router';
import { IssueticketComponent } from './issueticket.component';

const childRoutes: Routes = [
    {
        path: '',
        component: IssueticketComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
