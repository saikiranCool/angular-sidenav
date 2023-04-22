import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './app/home/home.component';
import { MainComponent } from './app/main-content/main-content.component';

const routes: Routes = [
  {path: '', component:Home},
  {path:'main',component:MainComponent}
 // {path: '', component:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
