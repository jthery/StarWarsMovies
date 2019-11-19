import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { People } from '../../models/people.model';

@Component({
  selector: 'app-movie-characters-component',
  templateUrl: './movie-characters-component.component.html',
  styleUrls: ['./movie-characters-component.component.css']
})

export class MovieCharactersComponent implements OnInit {

  people: People[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this.peopleService.listPeople;
  }
}
