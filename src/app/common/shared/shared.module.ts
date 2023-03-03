import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

const materialImports:any[]=[MatIconModule]


@NgModule({
  declarations: [],
  imports: [CommonModule,materialImports],
  exports:[materialImports]
})
export class SharedModule { }
