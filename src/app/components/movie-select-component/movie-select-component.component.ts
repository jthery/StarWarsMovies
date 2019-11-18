import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Observable } from 'rxjs';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-movie-select-component',
  templateUrl: './movie-select-component.component.html',
  styleUrls: ['./movie-select-component.component.css']
})

export class MovieSelectComponentComponent implements OnInit {

  films$: Observable<Film[]>;
  selectedFilm: string;
  public film;
  public show:boolean = false;
  public buttonName:any = 'Show';
  // showSpinner: boolean;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.films();
  }
  
  films() {
    this.films$ = this.filmService.getFilms();
    // if(this.films$) {
    //   this.showSpinner = false;
    // } else {
    //   this.showSpinner = true;
    // }
  }

  toggle() {
    this.show = !this.show;
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
      this.film = this.selectedFilm;
  }

}
