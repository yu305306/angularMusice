import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import IndexModule from '../index/IndexModule';


const routes: Routes = [
  {
    path: 'IndexModule', component: IndexModule
  },
  { path: '**', redirectTo: 'IndexModule', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
