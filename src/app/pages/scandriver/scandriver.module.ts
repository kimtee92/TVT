import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './scandriver.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { ScanDriverComponent } from './scandriver.component';

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
        ScanDriverComponent
    ]
})
export class ScanDriverModule { }
 