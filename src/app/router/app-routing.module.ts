import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexModule } from '../index/IndexModule';
import { playListModule } from '../playList/playListModule';


const routes: Routes = [
  {
    path: 'index', component: IndexModule
  },
  {
    path: 'playList', component: playListModule
  },
  { path: '**', redirectTo: 'playList', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
