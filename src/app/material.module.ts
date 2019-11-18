import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatProgressSpinnerModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }