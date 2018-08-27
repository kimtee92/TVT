import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule }    from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../shared/_helpers';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DriverService } from '../shared/_services';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        PagesComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers:[
        DriverService,      
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    ],
})
export class PagesModule { }
