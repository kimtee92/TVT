import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './violations.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { ViolationsComponent } from './violations.component';

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
        ViolationsComponent
    ]
})
export class ViolationsModule { }
 