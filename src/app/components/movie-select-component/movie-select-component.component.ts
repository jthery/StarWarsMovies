import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Observable } from 'rxjs';
import { Film } from '../../models/film.model';
import { PeopleService } from '../../services/people.service'

@Component({
  selector: 'app-movie-select-component',
  templateUrl: './movie-select-component.component.html',
  styleUrls: ['./movie-select-component.component.css']
})

export class MovieSelectComponent implements OnInit {

  films$: Observable<Film[]>;
  selectedFilm: string;
  message: string;
  public film;
  public show: boolean = false;
  public buttonName: any = 'Show';

  constructor(private filmService: FilmService, private peopleService: PeopleService) { }

  ngOnInit() {
    this.films();
  }

  films() {
    this.films$ = this.filmService.getFilms();
    this.films$.subscribe(data => this.handleSuccess(data), error => this.handleError(error));
  }

  toggle() {
    this.show = !this.show;
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
    this.film = this.selectedFilm;

    this.peopleService.setListPeople(this.film.characters);
  }

  handleSuccess(data) {
    this.message = 'Films StarWars'
  }

  handleError(error) {
    this.message = 'Nous rencontrons un léger problème, je vous invite à réessayer plus tard'
  }

}
