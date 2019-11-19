import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  
  listPeople: People[] = [];

  constructor(private http: HttpClient) { }

  setListPeople(people: string[]) {
    this.listPeople.length = 0;

    people.forEach(url => {
      this.http.get<People>(url).subscribe(
        (response) => {
          this.listPeople.push(response)
        }
      )
    });
  }

}
