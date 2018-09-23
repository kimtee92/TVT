import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './payment.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { PaymentComponent } from "./payment.component";

@NgModule({
    imports: [
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        PaymentComponent
    ]
})
export class PaymentModule { }
 