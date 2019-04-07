import { MusiceService } from './service/musice.service';
import { Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { IndexModule } from './index/IndexModule';
import { headerModule } from './comom/header/headerModule';
import { indexListModule } from './index/indexList/indexListModule';
import { indexMuscieModule } from './index/indexMuscie/indexMuscieModule';
import { indexMuscieListModule } from './index/indexMuscieList/indexMuscieListModule';


// ngrx
import { StoreModule } from '@ngrx/store';
import { musiceReducer } from "./ngrx/musiceReducer"

enableProdMode()
@NgModule({
  declarations: [
    AppComponent,
    //soToDu
    IndexModule,
    //common
    headerModule,
    indexListModule,
    indexMuscieModule,
    indexMuscieListModule,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    StoreModule.forRoot({ musice: musiceReducer })
  ],
  providers: [MusiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
