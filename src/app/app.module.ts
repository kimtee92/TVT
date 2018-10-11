import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Globals } from './shared/globals';
import { MyService } from './shared/services/myservice'
import { AuthGuard } from './shared/_guards/auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    routing
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard, Globals, MyService ]
})
export class AppModule { }
