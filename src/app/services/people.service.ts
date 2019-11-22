import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people.model';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  
  listPeople: People[] = [];

  constructor(private http: HttpClient) { }

  setListPeople(people: string[]) {
    this.listPeople.length = 0;

    people.forEach(url => {
      this.http.get<People>(url).subscribe(data => {
          this.listPeople.push(data)
        }
      )
    })
    return forkJoin(this.listPeople);
  }

    // characters(listUrl: string[]) {
    //   const characters$ = listUrl.map(url => this.http.get<People>(url));
    //   return forkJoin(characters$);
    // }

}
