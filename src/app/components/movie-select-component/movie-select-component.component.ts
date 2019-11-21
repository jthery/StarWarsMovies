import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Observable } from 'rxjs';
import { Film } from '../../models/film.model';
import { PeopleService } from '../../services/people.service'
import { resolve } from 'url';

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
  public button: boolean = false;
  public loading: boolean = false;

  constructor(private filmService: FilmService, private peopleService: PeopleService) { }

  ngOnInit() {
    console.log(this.loading, 'c\' est mon loading')
    this.films();
    console.log(this.loading, 'c\'est mon loading false')
  }

  films() {
    this.films$ = this.filmService.getFilms();
    this.loading = true;
    new Promise((resolve, reject) => {
      this.films$.subscribe(
        data => { 
          this.handleSuccess(data); 
          resolve();
      },
       error => this.handleError(error));
    }).then(() => this.loading = false);
  }

  toggle() {
    this.show = !this.show;
    this.film = this.selectedFilm;
    this.peopleService.setListPeople(this.film.characters);
  }

  handleSuccess(data) {
    this.button = !this.button;
    this.message = 'Tous les films ont bien été récupéré'
  }

  handleError(error) {
    this.message = 'Nous rencontrons un léger problème, je vous invite à réessayer plus tard'
  }

}
