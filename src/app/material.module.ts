import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatButtonToggleModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatSelectModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatSelectModule
  ]
})
export class MaterialModule { }