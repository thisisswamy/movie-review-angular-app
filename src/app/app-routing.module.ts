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
    path:'home',
    loadChildren :()=> import('./movie-landing/movie-landing.module').then(m=>m.MovieLandingModule)
  },
  {
    path:'my-reviews',
    loadChildren:()=>import('./my-review/my-review.module').then(m=>m.MyReviewModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
