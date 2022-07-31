import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Myc01Component } from './myc01/myc01.component';
import { SonComponent } from './son/son.component';
import { ClockComponent } from './clock/clock.component';
import { Myc02Component } from './myc02/myc02.component';
import { Myc03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';

@NgModule({
  declarations: [
    AppComponent,
    Myc01Component,
    SonComponent,
    ClockComponent,
    Myc02Component,
    Myc03Component,
    Myc04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
