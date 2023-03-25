import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieLandingRoutingModule } from './movie-landing-routing.module';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';
import { SharedModule } from '../common/shared/shared.module';


@NgModule({
  declarations: [MovieCatalogComponent],
  imports: [
    CommonModule,
    MovieLandingRoutingModule,
    SharedModule,

  ],
})
export class MovieLandingModule {}
