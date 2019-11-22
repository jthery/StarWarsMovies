import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatProgressBarModule,
  MatChipsModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatProgressBarModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatProgressBarModule,
    MatChipsModule
  ]
})
export class MaterialModule { }