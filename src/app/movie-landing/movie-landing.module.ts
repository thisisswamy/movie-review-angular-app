import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieLandingRoutingModule } from './movie-landing-routing.module';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';


@NgModule({
  declarations: [
    MovieCatalogComponent
  ],
  imports: [
    CommonModule,
    MovieLandingRoutingModule
  ]
})
export class MovieLandingModule { }
