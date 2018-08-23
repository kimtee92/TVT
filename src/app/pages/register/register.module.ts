import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './register.routing';
import { SharedModule } from '../../shared/shared.module';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        RegisterComponent
    ]
})
export class RegisterModule { }
