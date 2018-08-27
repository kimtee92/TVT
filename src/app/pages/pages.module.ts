import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule }    from '@angular/forms';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        PagesComponent,
        LoginComponent,
        RegisterComponent
    ]
})
export class PagesModule { }
