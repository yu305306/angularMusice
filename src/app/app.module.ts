import { MusiceService } from './service/musice.service';
import { Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import IndexModule from './index/IndexModule';
import headerModule from './comom/header/headerModule';
import indexListModule from './indexList/indexListModule';




@NgModule({
  declarations: [
    AppComponent,
    //soToDu
    IndexModule,
    //common
    headerModule,
    indexListModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MusiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
