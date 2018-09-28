import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './issueticket.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { IssueticketComponent } from './issueticket.component';

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
        IssueticketComponent
    ]
})
export class IssueticketModule { }
 