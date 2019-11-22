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
  public printFilm;
  public show: boolean = false;
  public loading: boolean = false;

  constructor(private filmService: FilmService, private peopleService: PeopleService) { }

  ngOnInit() {
    this.films();
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
    this.printFilm = this.selectedFilm;
    this.peopleService.setListPeople(this.printFilm.characters);
  }

  handleSuccess(data) {
    this.show = !this.show;
  }

  handleError(error) {
    this.message = 'Nous rencontrons un léger problème, je vous invite à réessayer plus tard..'
    this.loading = false;
  }

}
