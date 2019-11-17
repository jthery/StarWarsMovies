import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film } from '../models/film.model';


@Injectable({
  providedIn: 'root'
})

export class FilmService {
  url = 'https://swapi.co/api/films';
  
  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.url}`).pipe(map(data=> data['results']));
  }
}
