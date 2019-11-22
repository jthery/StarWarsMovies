import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Observable } from 'rxjs';
import { Film } from '../../models/film.model';
import { PeopleService } from '../../services/people.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-movie-select-component',
  templateUrl: './movie-select-component.component.html',
  styleUrls: ['./movie-select-component.component.css']
})

export class MovieSelectComponent implements OnInit {

  // listP: People[] = [];
  films$: Observable<Film[]>;
  selectedFilm: string;
  message: string;
  public film;
  public show: boolean = false;
  public button: boolean = false;
  public loading: boolean = false;
  public title: boolean = false;

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
    this.film = this.selectedFilm;
    this.peopleService.setListPeople(this.film.characters);
    // if(this.selectedFilm) {
    //   this.loading = true;
    //   this.listP.length = 0;
    //   this.film = this.selectedFilm;
    //   this.peopleService.characters(this.film.characters).subscribe(data => {
    //     this.listP = data;
    //     this.loading = false;
    //   });
    // }
  }

  handleSuccess(data) {
    this.show = !this.show;
    this.button = !this.button;
  }

  handleError(error) {
    this.message = 'Nous rencontrons un léger problème, je vous invite à réessayer plus tard..'
    this.loading = false;
  }

}
