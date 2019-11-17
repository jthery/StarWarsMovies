import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-movie-select-component',
  templateUrl: './movie-select-component.component.html',
  styleUrls: ['./movie-select-component.component.css']
})
export class MovieSelectComponentComponent implements OnInit {
  selectedFilm: string;
  films$: Observable<Film[]>;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.films$ = this.filmService.getFilms();
    console.log(this.films$, 'herehere')
  }


  onSelect(film: string) {
    this.selectedFilm = film;
    console.log(film, this.selectedFilm, 'lalalal')
  }
}
