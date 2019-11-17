import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Observable } from 'rxjs';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-movie-characters-component',
  templateUrl: './movie-characters-component.component.html',
  styleUrls: ['./movie-characters-component.component.css']
})
export class MovieCharactersComponentComponent implements OnInit {

  films$: Observable<Film[]>

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.Characters();
  }

  Characters() {
    this.films$ = this.filmService.getFilms();
  }

}
