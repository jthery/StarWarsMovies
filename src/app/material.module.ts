import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatProgressBarModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTableModule
  ]
})
export class MaterialModule { }