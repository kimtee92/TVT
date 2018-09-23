import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from "./payment.component";

const childRoutes: Routes = [
    {
        path: '',
        component: PaymentComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
