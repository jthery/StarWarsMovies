import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  url = 'https://swapi.co/api/people';
  
  constructor(private http: HttpClient) {}

  getPeoples(): Observable<People[]> {
    return this.http.get<People[]>(`${this.url}`).pipe(map(data=> data['results']));
  }
}
