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
  public show:boolean = false;
  public buttonName:any = 'Show';
  selectedFilm: string;
  films$: Observable<Film[]>;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.films$ = this.filmService.getFilms();
    console.log(this.films$, 'herehere')
  }

  toggle() {
    this.show = !this.show;

    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

}
