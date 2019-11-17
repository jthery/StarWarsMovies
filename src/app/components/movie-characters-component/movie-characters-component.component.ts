import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Observable } from 'rxjs';
import { People } from '../../models/people.model';

@Component({
  selector: 'app-movie-characters-component',
  templateUrl: './movie-characters-component.component.html',
  styleUrls: ['./movie-characters-component.component.css']
})
export class MovieCharactersComponentComponent implements OnInit {
  p : People;
  peoples$: Observable<People[]>

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.Characters();
  }

  Characters() {
    this.peoples$ = this.peopleService.getPeoples();
  }

}
