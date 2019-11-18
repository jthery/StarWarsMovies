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
  message: string;
  public film;
  public show: boolean = false;
  public buttonName: any = 'Show';
  // showSpinner: boolean;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.films();
  }

  films() {
    this.filmService.getFilms().subscribe(data => this.handleSuccess(data), error => this.handleError(error));
    // if(this.films$) {
    //   this.showSpinner = false;
    // } else {
    //   this.showSpinner = true;
    // }
  }

  toggle() {
    this.show = !this.show;
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
    this.film = this.selectedFilm;
  }

  handleSuccess(data) {
    this.message = 'Films StarWars'
  }

  handleError(error) {
    this.message = 'Nous rencontrons un léger problème, je vous invite à réessayer plus tard'
  }
  
}
