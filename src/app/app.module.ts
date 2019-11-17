import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieSelectComponentComponent } from './components/movie-select-component/movie-select-component.component';
import { MovieDetailsComponentComponent } from './components/movie-details-component/movie-details-component.component';
import { MovieCharactersComponentComponent } from './components/movie-characters-component/movie-characters-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSelectComponentComponent,
    MovieDetailsComponentComponent,
    MovieCharactersComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
