import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren :()=>import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'user',
    loadChildren :()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'movie-catalog',
    loadChildren :()=> import('./movie-landing/movie-landing.module').then(m=>m.MovieLandingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
