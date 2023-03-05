import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const materialImports:any[]=[MatIconModule,MatInputModule,MatFormFieldModule]


@NgModule({
  declarations: [],
  imports: [CommonModule,materialImports],
  exports:[materialImports]
})
export class SharedModule { }
