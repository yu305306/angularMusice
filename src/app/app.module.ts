import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import IndexModule from './index/IndexModule';
import headerModule from './comom/header/headerModule';



@NgModule({
  declarations: [
    AppComponent,
    //soToDu
    IndexModule,
    //common
    headerModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
